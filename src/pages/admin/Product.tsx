import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLoaderData, useLocation, useParams} from "react-router-dom";

const Product = () => {

    interface Product {
        available: boolean;
        description: string;
        id: number;
        name: string;
        photos: string[];
        price: number;
        category: string;
    }

    const [apiData, setApiData] = useState<Product | null>(null);
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        async function fetchData() {
            try {

                const response = await axios.get(`http://127.0.0.1:1337/admin/${params.id}`)
                if (response.status === 200 && response.data.status === 200) {
                    setApiData(response.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        return () => {}
    }, [])

    return (
        <div className="m-4 p-4 font-montserrat font-normal">
            <header>
                <nav className='flex justify-between items-center max-container'>
                    <div><Link to="/admin">Все товары</Link></div>
                    <div><Link to={`/admin/edit/${location.pathname.split("/")[2]}`}>Изменить</Link></div>
                    <div><Link to={`/admin/delete/${location.pathname.split("/")[2]}`}>Удалить</Link></div>
                    <div><Link to="/">Главная страница aaa</Link></div>
                </nav>
            </header>
            <hr className="my-4 border-t-2 border-blue-200" />
            <div className="border-2 m-4 p-4 border-black">{
                apiData && (
                    apiData.price
                )
            }
            </div>
        </div>
    )
}

export default Product