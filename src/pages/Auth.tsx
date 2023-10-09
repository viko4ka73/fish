import { adminFish } from "../assets/images";
import { Button } from "../components";
import { useState } from 'react';
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const Auth = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    const navigate  = useNavigate();

    const {setAuth} = useAuth()
    // const location = useLocation()
    // const from = location.state.from.pathname || '/'
    // console.log(from)
    const handleLogin = async () => {
             // console.log(from)
            try {
                const response = await axios.post(`http://127.0.0.1:1337/auth`, {
                    login: login,
                    password: password
                });
                if (response.data) {
                    setAuth(true)
                    navigate('/admin', {replace: true});
                } else {
                    setAlert(true)
                }
            } catch (error) {
                console.error('В запросе произошла ошибка:', error);
            }

    };

    return (
        <form className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img
                    src={adminFish}
                    alt='fish'
                    className="w-full pt-52"
                />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-3xl mb-4 text-dark-blue font-montserrat leading-normal font-bold "> Авторизация</h1>
                {/*{alert && <Alert/>}*/}
                    <div className="mb-4">
                        <label className="block text-dark-blue">
                            <span className="font-montserrat font-normal  text-3xl leading-none"> Логин </span>
                        </label>
                        <input type="text" id="username" value={login}
                            onChange={(event) => setLogin(event.currentTarget.value)}
                            name="username" className="w-full border border-gray-300 
                         rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-dark-blue">
                            <span className="font-montserrat font-normal  text-3xl leading-none"> Пароль </span>
                        </label>
                        <input type="password" id="password" value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)}
                            name="password" className="w-full border
                         border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                    </div>
                    <Button label="Войти" Enter={true} onClick ={handleLogin()} />
            </div>
        </form>
    )
}

export default Auth