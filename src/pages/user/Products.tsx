import { fishNetProduction, waves } from "../../assets/images"
import ProductsCard from "../../components/ProductPage/ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsNav from "../../components/ProductPage/ProductsNav";

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

    console.log(apiData)

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
              <ProductsNav apiData={categories}/>
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