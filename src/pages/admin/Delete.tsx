import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const Delete = () => {

    const params = useParams()
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            const apiUrl = `http://127.0.0.1:1337/admin/${params.id}`
            const response = await axios.delete(apiUrl)
            if (response.status === 200) {
                navigate('/admin')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="m-4 p-4 font-montserrat font-normal">
            <header className=''>
                <nav className='flex justify-between items-center max-container'>
                    <div><Link to="/admin">Все товары</Link></div>
                    <div><Link to={`/admin/${params.id}`}>Назад</Link></div>
                    <div><Link to="/">Главная страница </Link></div>
                </nav>
            </header>
            <div className="m-4 p-4 font-montserrat font-normal flex flex-col items-center">
                <div className="mb-4">Вы точно хотите удалить этот продукт?</div>
                <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" type="submit" onClick={handleDelete}>
                    Подтвердить
                </button>
            </div>

        </div>
    )
}

export default Delete