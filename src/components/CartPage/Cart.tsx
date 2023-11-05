import Feedback from "./Feedack";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";

interface Product {
    id: number;
    name: string;
    photos: string[];
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}
interface CartProps {
    cartItems: { [key: number]: CartItem };
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
    return (
        <div className="pt-20 pb-20">
            <h2 className="text-dark-blue font-montserrat leading-normal text-center text-[74px] font-bold mobile-text mt-10 pb-10">
                Корзина
            </h2>
            <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {Object.values(cartItems).map((item) => (
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={item.id}>
                            <img src={item.photos[0]} alt={item.name} className="w-full rounded-lg sm:w-40" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
