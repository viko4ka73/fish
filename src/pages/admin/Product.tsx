import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Product = () => {
    interface Product {
        description: string;
        id: number;
        name: string;
        photos: string[];
        price: number;
        category: string;
        slug: string;
    }

    const [apiData, setApiData] = useState<Product | null>(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:1337/admin/${id}`);
                if (response.status === 200 && response.data.status === 200) {
                    setApiData(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className="m-4 p-4 font-montserrat font-normal">
            <header >
                <nav className="flex justify-between items-center max-container">
                    <Link to="/admin">Все товары</Link>
                    <Link to={`/admin/edit/${id}`}>Изменить</Link>
                    <Link to={`/admin/delete/${id}`}>Удалить</Link>
                    <Link to="/">Главная страница</Link>
                </nav>
            </header>

            <div className="container mx-auto my-8">
                {apiData ? (
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        {apiData.photos.length > 0 && (
                            <div className="flex flex-wrap -mx-4 mb-6">
                                {apiData.photos.map((photo, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                                        <img src={`http://127.0.0.1:1337/${photo}`} alt={apiData.name} className="w-full h-64 object-cover rounded-lg" />
                                    </div>
                                ))}
                            </div>
                        )}
                        <h1 className="text-4xl font-bold mb-6">{apiData.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">Категория: {apiData.category}</p>
                        <p className="text-base mb-6">Описание: {apiData.description}</p>
                        <p className="text-xl font-bold mb-6">Цена: {apiData.price} руб. </p>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <p>Загрузка данных...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;
