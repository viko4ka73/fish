import { waves2 } from "../../assets/images"
import Cart from "../../components/CartPage/Cart"
import CartEmpty from "../../components/CartPage/CartEmpty"
import {ShopContext} from "../../context/ShopProvider";
import {useContext} from "react";

const CartShop = () => {
    const {cartItems} = useContext(ShopContext)!

    const isCartEmpty = Object.keys(cartItems).length === 0;

    return (

        <section className=" bg-extralight-blue pt-20 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
            {!isCartEmpty ? (
                <h1>ok</h1>
                // <Cart cartItems={cartItems}/>
            ) : (
                <CartEmpty />
            )}
        </section >
    )
}

export default CartShop