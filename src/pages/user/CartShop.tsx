import { waves } from "../../assets/images"
import Cart from "../../components/Cart"

const CartShop = ({carts} :any) => {
    return (
        <section className=" bg-extralight-blue">
            <img
                src={waves}
                alt='waves'
                className="w-full pt-5"
            />
            <Cart carts={carts} />
       
        </section >
    )
}

export default CartShop