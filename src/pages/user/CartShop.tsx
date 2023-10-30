import { waves2 } from "../../assets/images"
import Cart from "../../components/Cart"

const CartShop = () => {
    return (
        <section className=" bg-extralight-blue pt-20 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
            <h2 className="text-dark-blue font-montserrat leading-normal  text-center text-[74px] font-bold  mobile-text mt-20 max-sm:mt-10 ">Корзина</h2>
            <Cart />
        </section >
    )
}

export default CartShop