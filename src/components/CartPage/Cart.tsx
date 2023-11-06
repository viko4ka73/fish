import Feedback from "./Feedack";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";


interface CartItem extends Product {
    quantity: number;
}
interface CartProps {
    cartItems: { [key: number]: CartItem };
}

interface Product {
    id: number;
    name: string;
    photos: string[];
    price: number;
}

const Cart: React.FC<CartProps> = ({cartItems}) => {
    const {addToCart, removeFromCart, decrementFromCart} = useContext(ShopContext)!;

    const cartAmount = Object.values(cartItems).reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className=" pt-20 pb-20">
            <h2 className="text-dark-blue font-montserrat leading-normal  text-center text-[74px] font-bold  mobile-text mt-10  pb-10">Корзина</h2>
            <div className="mx-auto max-w-7xl justify-center  px-6 md:flex md:space-x-6 xl:px-0 ">
                <div className=" rounded-lg md:w-2/3">
                    {Object.values(cartItems).map((item) => (
                        <>
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                            <img
                                src={`http://127.0.0.1:1337/${item.photos[0]}`}
                                    alt="product-image" className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold  text-extradark-blue">{item.name}</h2>
                                    </div>
                                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                    <span onClick={() => {decrementFromCart(item.id)}}
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-extradark-blue hover:text-blue-50"> - </span>
                            <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none text-dark-blue"
                                type="text" value={item.quantity} min="1" />

                            <span onClick={() => {addToCart(item)}}
                                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-extradark-blue hover:text-blue-50"> + </span>
                        </div>
                        <div className="flex items-center space-x-4 text-dark-blue"><p
                            className="text-sm">{item.price} ₽</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5" stroke="currentColor" onClick={() => {removeFromCart(item.id)}}
                                 className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        </div>
                        </div>
                        </div>
                        </>

                        ))}

</div>
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="flex justify-between">
            <p className="text-lg font-bold  text-extradark-blue">Итого</p>
            <div className="">
            <p className="mb-1 text-lg font-bold text-extradark-blue">{cartAmount.toFixed(2)}</p>
                    </div>
                </div>
                <Feedback />
            </div>
        </div>
    </div>
    )
}

export default Cart;