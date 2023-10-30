import Button from "../Button";

import { Link, useLocation, useParams } from 'react-router-dom';
import PhotoContainer from "./PhotoContainer";

interface Product {
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    category: string;
    slug: string;
}

const ItemCard = ({ name, description, photos, price }: Product) => {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(segment => segment !== '');

    return (
        <div className="py-6 ">
            {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Link to="/products">Вся продукция</Link>
                    {segments.map((segment, index) => (
                        <div key={index}>
                            <span>
                                <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <Link to={`/products/${segment}`}>{segment}</Link>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="flex pt-6">
                <PhotoContainer photos={photos} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2  leading-tight tracking-tight font-bold text-main-blue text-2xl md:text-3xl">
                                {name}
                            </h2>
                            <div className="flex items-center space-x-4 my-4">
                                <div>
                                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                        <span className="text-dark-blue font-montserrat text-xl font-semibold mr-10">
                                           Цена: {price}₽/кг
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 pb-2 text-xl">{description}</p>
                            <Button label="В корзину" inCart={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
