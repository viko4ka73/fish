import { Link } from "react-router-dom"
import Button from "../Button"
import {ShopContext} from "../../context/ShopProvider";
import {useContext} from "react";

type ProductsCardProps = {
    id: number,
    name: string;
    price: number;
    photos: string[];
    slugName: string;
}

interface Product {
    id: number;
    name: string;
    photos: string[];
    price: number;
}


const ProductsCard = ({id, name, price, photos, slugName }: ProductsCardProps) => {

    const {addToCart} = useContext(ShopContext)!

    const product: Product = {
        id: id,
        name: name,
        price: price,
        photos: photos
    }

    return (
        <div className="w-full z-[1]">
            <Link
                key={name}
                to={slugName}
            >
                <img className="w-[375px] h-[375px] max-xl:w-full max-md:w-full max-md:h-[200px] object-cover object-center rounded-lg" src={`${process.env.REACT_APP_VAR_API_URL}/${photos[0]}`} alt="product image" />
            </Link>
            <div className="pt-5">
                <Link
                    key={name}
                    to={slugName}
                >
                    <h3 className="text-main-blue font-montserrat text-xl font-normal">{name}</h3>
                </Link>
                <div className="flex items-center justify-between pt-3 max-md:flex-col max-md:items-start ">
                    <span className="text-dark-blue font-montserrat text-xl font-semibold max-md:mb-4">{price} ₽/кг</span>
                    <Button label="В корзину" inCart={true} onClick={() => {addToCart(product)}}/>
                </div>
            </div>
        </div >

    )
}

export default ProductsCard