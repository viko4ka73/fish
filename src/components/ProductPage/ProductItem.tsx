import {  waves } from "../../assets/images"
import ItemCard from "./ItemCard"
import ProductsNav from "./ProductsNav"
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useLocation, useParams} from "react-router-dom";

const ProductItem = () => {
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
    const params = useParams()
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:1337/products/${params.slug}`)
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
            <div className="flex p-4">
                <ProductsNav apiData={apiData}/>
                <div className="flex flex-col pl-20 pr-5">

                    <div className="flex">
                        {apiData.map((product) => (
                            <ItemCard key={product.id} {...product} />
                        ))}
                        {/* <ItemCard /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItem