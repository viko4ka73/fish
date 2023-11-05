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

const Cart: React.FC<CartProps> = ({ cartItems}) => {
    return (
        <div className=" pt-20 pb-20">
            <h2 className="text-dark-blue font-montserrat leading-normal  text-center text-[74px] font-bold  mobile-text mt-10  pb-10">Корзина</h2>
            {/*{Object.values(cartItems).map((item) => (*/}
            {/*    <div>{item.price}</div>*/}
            {/*    // <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={item.id}>*/}
            {/*    //     <img src={item.photos[0]} alt={item.name} className="w-full rounded-lg sm:w-40" />*/}
            {/*    // </div>*/}
            {/*))}*/}
            <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
                <div className="rounded-lg md:w-2/3">
                    {Object.values(cartItems).map((item) => (
                        // console.log(item.photos[0])
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img
                            src={item.photos[0]}
                            alt="product-image" className="w-full rounded-lg sm:w-40"/>
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold  text-extradark-blue">{item.name}</h2>
                                <p className="mt-1 text-xs text-dark-blue">36EU - 4US</p>
                            </div>
                            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center border-gray-100">
                                    <span
                                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-extradark-blue hover:text-blue-50"> - </span>
                                    <input
                                        className="h-8 w-8 border bg-white text-center text-xs outline-none text-dark-blue"
                                        type="number" value="2" min="1"/>
                                    <span
                                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-extradark-blue hover:text-blue-50"> + </span>
                                </div>
                                <div className="flex items-center space-x-4 text-dark-blue"><p
                                    className="text-sm">259.000 ₭</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor"
                                         className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className=" text-dark-blue">Название товара</p>
                        <p className="text-dark-blue">$129.99</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold  text-extradark-blue">Итого</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold text-extradark-blue">$134.98 USD</p>
                        </div>
                    </div>
                    <Feedback/>
                </div>
            </div>
        </div>
    )
}

export default Cart;
