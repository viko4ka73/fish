import { fishingMan, serverDead, waves2 } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";
import { Button } from "../../components";
import ItemCard from "../../components/ProductPage/ItemCard";
import { useLocation } from 'react-router-dom';

interface Product {
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    category: string;
    slug: string;
}
const Products = () => {
    const location = useLocation();
    const selectedSlug = location.pathname.startsWith('/products/') ? location.pathname.split('/').pop() : null;
    const [apiData, setApiData] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get('http://127.0.0.1:1337/products')
                const responseCategory = await axios.get(`http://127.0.0.1:1337/categories`)
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
        <section className=" bg-extralight-blue pt-20 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5 "
            />
            {loading ? (
                <div className=" h-screen flex flex-col justify-center items-center mt-10">
                    <div className="animate-spin inline-block w-20 h-20 border-[8px] border-current border-t-transparent text-dark-blue rounded-full dark:text-white" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div></div>

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
                <>
                    <div className="flex min-h-[1200px]  ">
                        <ProductsNav categories={categories} setSelectedCategories={setSelectedCategories} />
                        <div className="flex flex-col ml-[12%] pr-16">
                            {selectedSlug ? (
                                apiData.filter(product => product.slug === selectedSlug).map(filteredProduct => (
                                    <ItemCard key={filteredProduct.id} {...filteredProduct} />
                                ))
                            ) :
                                selectedCategories ?
                                    (
                                        <>
                                            <h1 className="text-4xl font-montserrat font-bold text-dark-blue mt-20">
                                                {selectedCategories}
                                            </h1>
                                            <div className="grid grid-cols-3 gap-20 mt-14">
                                                {
                                                    apiData
                                                        .filter(product => product.category === selectedCategories)
                                                        .map(filteredProduct => (
                                                            <ProductsCard key={filteredProduct.id} {...filteredProduct} />
                                                        ))
                                                }
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h1 className="text-4xl font-montserrat font-bold text-dark-blue  mt-20">Каталог</h1>
                                            <div className="grid grid-cols-3  gap-[90px] mt-14 ">
                                                {apiData.map((product) => (
                                                    <ProductsCard key={product.id} {...product} />
                                                ))}
                                            </div>
                                        </>
                                    )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
                    <img
                        src={fishingMan}
                        alt='fishing'
                        className="pb-5 max-xl:w-[300px] max-lg:w-[200px]"
                    />
                    <span className="text-dark-blue text-[64px] leading-none  mx-20  mobile-text-header font-montserrat font-bold text-center mb-10">
                        Извините рыбки уплыли...
                        <br /> Ловим новых
                    </span>
                    <Button label="Вернуться на главную" Catalog={true} href='/home' />
                </div>
            )
            }
        </section >
    )
}

export default Products;
