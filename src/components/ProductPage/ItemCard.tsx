import { Link } from "react-router-dom";
import Button from "../Button";
import PhotoContainer from "./PhotoContainer";

// interface Product {
//     category: string;
//     description: string;
//     id: number;
//     name: string;
//     photos: string[];
//     price: number;
//     slugCategory: string;
//     slugName: string;
//     onSelectCategory: (category: any) => void;
// }

const ItemCard = ({ name, description, photos, price, slugCategory, category, slugName, onSelectCategory}: any ) => {
    const handleCategoryClick = (category: any) => {

        onSelectCategory(category);
    };
    return (
        <div>
            <Link to="/products"
                className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg"> Назад к списку товаров</Link>
            <span> / </span>
            <Link to={`/products/${slugCategory}`}  onClick={() => handleCategoryClick(category)} className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg">
                {category}</Link>
            <span> / </span>
            <Link to={`/products/${slugName}`} className="font-montserrat mobule-text-button  font-bold text-dark-blue text-lg">
                {name}</Link>
            <div className="flex pt-6 w-full" >
                <PhotoContainer photos={photos} />
                <div className=" px-4 sm:px-6 lg:px-8 mt-6 w-full">
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2 font-montserrat mobule-text-button  font-bold text-dark-blue text-3xl">
                                {name}
                            </h2>
                            <div className="flex items-center space-x-4 my-4">
                                <div>
                                    <h2 className="mb-2 font-montserrat mobule-text-button font-normal text-white  text-2xl">
                                        Описание товара:
                                    </h2>
                                    <div className="rounded-lg bg-gray-100 flex p-5">
                                        <span className="text-info font-montserrat text-xl font-medium mr-10">
                                            {description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-dark-blue font-bold  font-montserrat pb-2 text-xl"> {price} ₽/кг</p>
                                <Button label="В корзину" inCart={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
