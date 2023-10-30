import { waves2 } from "../../assets/images"
import Cart from "../../components/CartPage/Cart"
import CartEmpty from "../../components/CartPage/CartEmpty"


const CartShop = () => {
    return (
        <section className=" bg-extralight-blue pt-20 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
           
            <Cart />

            <CartEmpty />
        </section >
    )
}

export default CartShop