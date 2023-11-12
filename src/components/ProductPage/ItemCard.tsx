import { Link } from "react-router-dom";
import Button from "../Button";
import PhotoContainer from "./PhotoContainer";
import {ShopContext} from "../../context/ShopProvider";
import {useContext} from "react";

type ItemProps = {
    id: number;
    category: string;
    description: string;
    name: string;
    photos: string[];
    price: number;
    slugCategory: string;
    slugName: string;
    onSelectCategory?: (category: any) => void;
}

interface Product {
    id: number;
    name: string;
    photos: string[];
    price: number;
}

const ItemCard = ({id, name, description, photos, price, slugCategory, category, slugName, onSelectCategory }: ItemProps) => {

    const {addToCart} = useContext(ShopContext)!

    const handleCategoryClick = (category: any) => {
        if (onSelectCategory) {
            onSelectCategory(category);
        }
    };

    const product: Product = {
        id: id,
        name: name,
        price: price,
        photos: photos
    }

    return (
        <div>
            <Link to="/products"
                className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg"> Назад к списку товаров</Link>
            <span> / </span>
            <Link to={`/products/${slugCategory}`} onClick={() => handleCategoryClick(category)} className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg">
                {category}</Link>
            <span> / </span>
            <Link to={`/products/${slugName}`} className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg">
                {name}</Link>
            <div className="flex pt-6 w-full max-xl:flex-col" >
                <PhotoContainer photos={photos} />
                <div className=" px-4 mt-6 w-full max-md:px-0">
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2 font-montserrat mobule-text-button  font-bold text-dark-blue text-3xl">
                                {name}
                            </h2>
                            <div className="flex items-center space-x-4 my-4">
                                <div>
                                    <h2 className="mb-2 font-montserrat mobule-text-button font-normal text-info  text-2xl">
                                        Описание товара:
                                    </h2>
                                    <div className="rounded-lg bg-gray-100 flex p-5">
                                        <span className="text-info font-montserrat text-xl font-medium mr-10  break-all">
                                            {description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between max-md:flex-col">
                                <p className="text-dark-blue font-bold  font-montserrat pb-2 text-xl"> {price} ₽/кг</p>
                                <Button label="В корзину" inCart={true} onClick={() => {addToCart(product)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
