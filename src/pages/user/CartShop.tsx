import { waves2 } from "../../assets/images";
import Cart from "../../components/CartPage/Cart";
import CartEmpty from "../../components/CartPage/CartEmpty";
import { ShopContext } from "../../context/ShopProvider";
import { useContext } from "react";

const CartShop = () => {
    const shopContext = useContext(ShopContext);

    if (!shopContext) {
        return <div>Loading...</div>; // Или другой способ обработки загрузки/ошибки
    }
    const { cartItems } = shopContext;
    console.log(cartItems)

    const hasItems = Object.keys(cartItems).length > 0;

    return (
        <section className="bg-extralight-blue pt-20 pb-20">
            <img src={waves2} alt="waves" className="w-full pt-5"/>
            {hasItems ? <Cart cartItems={cartItems}/> : <CartEmpty />}
        </section>
    );
}

export default CartShop;
