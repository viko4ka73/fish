import { fishNetProduction, fishingMan, waves } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";
import { Button } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom"; // Импортируем useHistory и useNavigate
import ItemCard from "../../components/ProductPage/ItemCard";

const Products = () => {
    interface Product {
        description: string;
        id: number;
        name: string;
        photos: string[];
        price: number;
        category: string;
        slug: string;
    }

    const [apiData, setApiData] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [showItemCard, setShowItemCard] = useState(false);

    const { slug } = useParams();

    useEffect(() => {

        setShowItemCard(false);
    }, [slug]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get('http://127.0.0.1:1337/products')
                const responseCategory = await axios.get(`http://127.0.0.1:1337/categories`)
                if (responseProduct.status === 200 && responseProduct.data.status === 200) {
                    setApiData(responseProduct.data.data)
                }
                if (responseCategory.status === 200) {
                    setCategories(responseCategory.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="bg-extralight-blue">
            <img
                src={waves}
                alt='waves'
                className="w-full pt-5 "
            />

            {apiData === null ? (
                <div className="h-screen  bg-extralight-blue flex flex-col justify-center items-center">
                    <img
                        src={fishingMan}
                        alt='fishing'
                        className="pb-5"
                    />
                    <span className="text-dark-blue text-[50px] leading-none font-montserrat font-bold text-center mb-10">
                        Извините рыбки уплыли...
                        <br /> Ловим новых
                    </span>
                    <Button label="Вернуться на главную" Catalog={true} href='/home' />
                </div>
            ) : (
                <>
                    <img
                        src={fishNetProduction}
                        alt='net'
                        className="absolute right-0 z-0 w-[35%]"
                    />
                    <div className="flex p-4">
                        <ProductsNav categories={categories} />
                        <div className="flex flex-col pl-20 pr-5">
                            <h1 className="text-4xl font-montserrat font-bold text-dark-blue  mt-20">Наименование</h1>
                            {apiData.map((product) => (
                                showItemCard || product.slug === slug ? (
                                    <div className="flex">
                                        <ItemCard key={product.id} {...product} />
                                    </div>
                                ) : (
                                    <Link
                                        key={product.id}
                                        to={product.slug}
                                        onClick={() => setShowItemCard(true)}
                                    >
                                            <div className="flex flex-col pl-20 pr-5">
                                            <div className="grid grid-cols-3 gap-20 mt-14">
                                                <ProductsCard key={product.id} {...product} />
                                            </div>
                                        </div>
                                 
                                    </Link>
                                )
                            ))}
                    </div>
                </div>
        </>
    )
}
        </section >
    )
}

export default Products;
