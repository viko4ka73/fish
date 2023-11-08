import { fishingMan, serverDead, waves2 } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";
import ItemCard from "../../components/ProductPage/ItemCard";
import { Link, useLocation } from 'react-router-dom';
import { Button } from "../../components";

interface Product {
    category: string;
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    slugCategory: string;
    slugName: string;
}

const Products = () => {
    const location = useLocation();
    const selectedSlug = location.pathname.startsWith('/products/') ? location.pathname.split('/').pop() : null;
    const [apiData, setApiData] = useState<Product[]>([])
    const [categories, setCategories] = useState<Product[]>([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleSelectCategory = (category: any) => {
        setSelectedCategory(category);
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get('http://127.0.0.1:1337/products')
                const responseCategory = await axios.get(`http://127.0.0.1:1337/categories-cards`)
                if (responseProduct.status === 200 && responseProduct.data.status === 200) {
                    setApiData(responseProduct.data.data)
                }
                else {
                    setError("Ошибка при получении данных с сервера.");
                }
                if (responseCategory.status === 200) {
                    setCategories(responseCategory.data.data)
                }
                else {
                    setError("Ошибка при получении данных с сервера.");
                }
            } catch (error) {
                setError("Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <section className="bg-extralight-blue pt-20 pb-32">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5 "
            />
            {
                loading ? (
                    <div className="h-screen flex flex-col justify-center items-center mt-10">
                        <div className="animate-spin inline-block w-20 h-20 border-[8px] border-current border-t-transparent text-dark-blue rounded-full dark:text-white" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="h-screen flex flex-col justify-center items-center">
                        <img
                            src={serverDead}
                            alt='fishing'
                            className="pb-5 max-xl:w-[300px] max-lg:w-[200px]"
                        />
                        <span className="text-dark-blue text-[64px] mx-20 leading-none font-montserrat font-bold text-center mb-10 mobile-text-header">
                            {error}
                        </span>
                    </div>
                ) : apiData ? (
                    <div className="flex max-md:flex-col ">
                        <div className="flex flex-col mt-10 rounded-r-[50px] bg-light-blue h-[100%] max-md:flex-row  max-md:mr-4 max-[500px]:flex-col max-[500px]:w-[150px]">
                            {categories.map((product) => (
                                <ProductsNav key={product.id} {...product} onSelectCategory={handleSelectCategory} />
                            ))}
                        </div>
                        <div className="flex flex-col ml-[12%] pr-16">
                            {selectedSlug ? (
                                <>
                                    {apiData.some(product => product.slugCategory === selectedSlug) && (
                                        <>
                                            <h1 className="text-4xl font-montserrat font-bold text-dark-blue mt-14">
                                                {selectedCategory}
                                            </h1>
                                            <Link to="/products" className="font-montserrat mobule-text-button font-bold text-dark-blue text-lg mt-8">
                                                Назад к списку товаров
                                            </Link>
                                        </>
                                    )}
                                </>
                            ) : null}
                            <div className="grid grid-cols-3 gap-[90px] mt-14 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-[380px]:mt-6">
                                {apiData.map((product) =>
                                    selectedSlug === product.slugCategory ? (
                                        <div key={product.id}>
                                            <ProductsCard key={product.id} {...product} />
                                        </div>
                                    ) : null
                                )}
                            </div>

                            {apiData.map(product => (
                                selectedSlug === product.slugName ? (
                                    <div key={product.id}>
                                        <ItemCard
                                            key={product.id}
                                            {...product}
                                            onSelectCategory={handleSelectCategory}
                                        />
                                    </div>
                                ) : null))}
                            {selectedSlug === null && (
                                <>
                                    <h1 className="text-4xl font-montserrat font-bold text-dark-blue mobile-text-header">Каталог</h1>
                                    <div className="grid grid-cols-3 gap-[90px] mt-14 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-[380px]:mt-6">
                                        {apiData.map((product) => (
                                            <ProductsCard key={product.id} {...product} />
                                        ))}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                ) : (
                    <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
                        <img
                            src={fishingMan}
                            alt='fishing'
                            className="pb-5 max-xl:w-[300px] max-lg:w-[200px]"
                        />
                        <span className="text-dark-blue text-[64px] leading-none mx-20 mobile-text-header font-montserrat font-bold text-center mb-10">
                            Извините, рыбки уплыли...
                            <br /> Ловим новых
                        </span>
                        <Button label="На главную" Catalog={true} href='/' />
                    </div>
                )}
        </section>
    )
}

export default Products;
