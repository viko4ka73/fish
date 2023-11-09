import { fishingNet } from "../../assets/images"
import Alert from "../Alert"
import Button from "../Button"

type CartEmptyProps = {
    showSuccessAlert: boolean;
    showErrorAlert: boolean;
    closeAlert: () => void;
}

const CartEmpty = ({ showSuccessAlert, showErrorAlert, closeAlert }: CartEmptyProps) => {
    return (


        <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
            <img
                src={fishingNet}
                alt='fishing'
                className=" pb-5 max-xl:w-[300px] max-lg:w-[200px]"
            />
            <span className="text-dark-blue text-[64px] mx-20  mobile-text-header leading-none font-montserrat font-bold text-center mb-10">
                В корзине пусто... <br />
                Добавьте товары, чтобы оформить заказ
            </span>
            <Button label="За покупками" Catalog={true} href='/products' />
            {showSuccessAlert && (
                <div className="absolute top-0 left-0 right-0 mx-auto w-full  h-full flex justify-center items-start z-10 
                opacity-100 transition-opacity duration-500  bg-black bg-opacity-50">
                    <div className="bg-white text-white p-4 rounded-b-lg">
                        <div className="container mx-auto text-end ">
                            <Alert message="Спасибо за заказ! Ваша заявка отправлена!" type="success" />
                            <button className="mt-4 border-2 px-4 rounded-sm bg-extralight-blue 
                             font-montserrat text-dark-blue hover:ring-light-blue hover:ring-2 text-xl" onClick={closeAlert}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showErrorAlert && (
                <div className="absolute top-0 left-0 right-0 mx-auto w-full  h-full flex justify-center items-start z-10 
              opacity-100 transition-opacity duration-500  bg-black bg-opacity-50">
                    <div className="bg-white text-white p-4 rounded-b-lg">
                        <div className="container mx-auto text-end">
                            <Alert message="Что-то пошло не так. Пожалуйста, попробуйте еще раз." type="error" />
                            <button className="mt-4 border-2 px-4 rounded-sm bg-extralight-blue  font-montserrat text-dark-blue hover:ring-light-blue hover:ring-2 text-xl" onClick={closeAlert}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default CartEmpty