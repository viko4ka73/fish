import {  fishingNet } from "../../assets/images"
import Button from "../Button"

const CartEmpty = () => {
    return (


            <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
                <img
                    src={fishingNet}
                    alt='fishing'
                    className=" pb-5 max-xl:w-[300px] max-lg:w-[200px]"
                />
                <span className="text-dark-blue text-[64px] mx-20  mobile-text-header leading-none font-montserrat font-bold text-center mb-10">
                В корзине пусто... <br/>
                Добавьте товары, чтобы оформить заказ 
                </span>
                <Button label="За покупками" Catalog={true} href='/products' />
            </div>

    )
}

export default CartEmpty