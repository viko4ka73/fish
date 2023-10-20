import { fishNetProduction, waves } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";

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
                className="w-full pt-5 "
            />
            <img
                src={fishNetProduction}
                alt='net'
                className="absolute right-0 z-0 w-[35%]"
            />
             
            <div className="flex p-4">
              <ProductsNav apiData={apiData}/>
                <div className="flex flex-col pl-20 pr-5">
                    <h1 className="text-4xl font-montserrat font-bold text-dark-blue  mt-20">Наименование</h1>
                    <div className="grid grid-cols-3 gap-20 mt-14">
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