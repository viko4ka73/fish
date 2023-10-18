import { waves } from "../../assets/images"
import { fishnetRight } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import ProductsName from "../../components/ProductPage/ProductsName"
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {

    interface Product {
        available: boolean;
        description: string;
        id: number;
        name: string;
        photos: string[];
        price: number;
        category: string;
    }

    const [apiData, setApiData] = useState<Product[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:1337/products')
                if (response.status === 200 && response.data.status === 200) {
                    setApiData(response.data.data)
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
                className="w-full pt-5 z-30"
            />
            <img
                src={fishnetRight}
                alt='net'
                className="absolute right-0 z-0  w-[45%]"
            />
            <div className="">
                <div className="bg-light-blue w-[435px] ml-10 pb-10 rounded-md mt-[-26px] ">
                    <h1 className="text-4xl font-montserrat font-bold text-dark-blue p-10 pt-20">Продукция</h1>
                    {apiData.map((product) => (
                        <ProductsName key={product.id} {...product} />
                    ))}
                </div>
                <div>
                    <h1 className="text-4xl font-montserrat font-bold text-dark-blue z-10 ">Наименование</h1>
                    <div className="grid grid-cols-3 gap-2 z-10 ">
                        {apiData.map((product) => (
                            <ProductsCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products