import { useContext, useState } from "react";
import Button from "../Button"
import { useForm } from "react-hook-form";
import axios from "axios";
import { ShopContext } from "../../context/ShopProvider";


interface FormData {
    name: string;
    phone: string;
    address: string;
    number: string;
    doorphone: string;
    floor: string;
    apartment: string;
    comment:string;
}

type FeedbackProps = {
    cartAmount: number;
    setShowSuccessAlert:React.Dispatch<React.SetStateAction<boolean>>;
    setShowErrorAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Feedback = ({ cartAmount, setShowSuccessAlert, setShowErrorAlert}: FeedbackProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const { clearCart, cartItems } = useContext(ShopContext)!;

    const onSubmit = (data: FormData) => {

        const telegramToken: string = process.env.REACT_APP_VAR_TG_TOKEN!;
        const chatId: string = process.env.REACT_APP_VAR_CHAT_ID!;
        let text: string = `Поступил заказ! \n\nИмя: ${data.name}\nТелефон: ${data.phone}\n\nДетали заказа\n\n`;
        let totalAmount: number = 0;

        Object.values(cartItems).map((item) => {
            text += `Товар: ${item.name}, Цена: ${item.price} руб, Количество: ${item.quantity} кг\n\n\n`;
            totalAmount += parseInt(String(item.price));
        })
        if (totalAmount < 5000) {
            text += `\n\nСумма заказа: ${totalAmount} руб`
        } else {
            text += `Детали доставки\n\nУлица: ${data.address}, Подъезд: ${data.number}, Домофон: ${data.doorphone}, Этаж: ${data.floor}, Квартира: ${data.apartment}\n\nКомментарий: ${data.comment}`
        }


        axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .then(response => {
                reset();
                clearCart();
                setShowSuccessAlert(true);
            })
            .catch(error => {
                setShowErrorAlert(true);
                console.error("Ошибка при отправке заказа в Telegram", error);
            });
    }

    const phoneRegExp = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        
            <div className="mb-4 mt-4">
                <label className="block text-dark-blue">
                    <span className="font-montserrat font-medium leading-none text-lg">Имя</span>
                </label>
                <input type="text" id="name"
                    {...register("name", {
                        required: "Необходимо ввести имя!",
                        minLength: {
                            value: 1,
                            message: "Имя должно содержать хотя бы одну букву!"
                        }
                    })}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                {errors.name && <div className="text-[#FF6B6B]">{errors.name.message}</div>}
            </div>
            <div className="mb-4">
                <label className="block text-dark-blue">
                    <span className="font-montserrat font-normal leading-none text-lg">Номер телефона</span>
                </label>
                <input type="tel" id="phone"
                    {...register("phone", {
                        required: "Необходимо ввести номер!",
                        minLength: {
                            value: 6,
                            message: "Номер не может быть короче 6 символов!"
                        },
                        pattern: {
                            value: phoneRegExp,
                            message: "Некорректный формат номера телефона"
                        }
                    })}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue " />
                {errors.phone && <div className="text-[#FF6B6B]">{errors.phone.message}</div>}
            </div>
            {cartAmount >= 10000 ? <div className="mb-4">

                <label className="block text-dark-blue">
                    <span className="font-montserrat font-normal leading-none text-lg ">Улица</span>
                </label>
                <input type="text" id="adress"
                    {...register("address", {
                        required: "Необходимо ввести адрес доставки!",
                        minLength: {
                            value: 1,
                            message: "Адрес должен содержать хотя бы одну букву!"
                        }
                    })}
                    className="w-full border text-dark-blue border-gray-300 rounded-md py-2 font-montserrat font-normal leading-none text-lg px-3 focus:outline-none focus:border-main-blue" />
                {errors.address && <div className="text-[#FF6B6B]">{errors.address.message}</div>}
                <div className="flex mt-2 gap-4">
                    <div className="flex flex-col ">
                        <label className="block text-dark-blue">
                            <span className="font-montserrat font-normal leading-none text-lg ">Подъезд</span>
                        </label>
                        <input type="text" id="number"
                            {...register("number", )}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                        {errors.number && <div className="text-[#FF6B6B]">{errors.number.message}</div>}
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-dark-blue">
                            <span className="font-montserrat font-normal leading-none text-lg ">Домофон</span>
                        </label>
                        <input type="text" id="doorphone"
                            {...register("doorphone", )}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                        {errors.doorphone && <div className="text-[#FF6B6B]">{errors.doorphone.message}</div>}
                    </div>
                </div>
                <div className="flex mt-2 gap-4">
                    <div className="flex flex-col">
                        <label className="block text-dark-blue">
                            <span className="font-montserrat font-normal leading-none text-lg ">Этаж</span>
                        </label>
                        <input type="text" id="floor"
                            {...register("floor", {
                                required: "Необходимо ввести этаж!",
                                minLength: {
                                    value: 1,
                                    message: "Этаж должен содержать хотя бы один символ!"
                                }
                            })}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                        {errors.floor && <div className="text-[#FF6B6B]">{errors.floor.message}</div>}
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-dark-blue">
                                <span className="font-montserrat font-normal leading-none text-lg ">Квартира</span>
                            </label>
                            <input type="text" id="apartment"
                                {...register("apartment", )}
                                className="w-full border  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                            {errors.apartment && <div className="text-[#FF6B6B]">{errors.apartment.message}</div>}
                        </div>
                       
                    </div>
                    <label className="block text-dark-blue mt-4">
                                <span className="font-montserrat font-normal leading-none text-lg ">Комментарий к заказу</span>
                            </label>
                            <input type="text" id="comment"
                                {...register("comment")}
                                className="w-full border  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
            </div>
                : ''}
            <div className="mt-4 flex justify-center">
                <Button type="submit" label="Оформить заказ" Delivery={true} />
            </div>
        </form>
    );
};

export default Feedback