import { fishNetProduction, fishingMan, waves } from "../../assets/images"
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";
import { Button } from "../../components";
import ItemCard from "../../components/ProductPage/ItemCard";


interface Product {
    category: string;
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    slugCategory:string;
    slugName: string;
}


const ProductItem = () => {
    const [apiData, setApiData] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([])
 

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
                <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
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
                    <div className="flex p-4 ">
                        <ProductsNav categories={categories} />
                        <div className="flex flex-col pl-20 pr-5">
                            <h1 className="text-4xl font-montserrat font-bold text-dark-blue  mt-20">Наименование</h1>
                            <div className="grid grid-cols-3  gap-20 mt-14">
                                {apiData.map((product) => (
                                    <ItemCard key={product.id} {...product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </section >
    )
}

export default ProductItem;
