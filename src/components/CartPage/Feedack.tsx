import {useContext, useState} from "react";
import Button from "../Button"
import {useForm} from "react-hook-form";
import axios from "axios";
import { ShopContext } from "../../context/ShopProvider";

interface FormData {
    name: string;
    phone: string;
}

const Feedback = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormData>()

    const { clearCart, cartItems } = useContext(ShopContext)!;
    const [message, setMessage] = useState('');

    const onSubmit = (data: FormData) => {


        const telegramToken: string = "6925211492:AAGcTqcTyDP8Dmg4LXSR_fJL87_k4eOb5es";
        const chatId: string = "-4025606117";
        let text: string = `Поступил заказ! \n\nИмя: ${data.name}\nТелефон: ${data.phone}\n\nЗаказ:\n`;
        let totalAmount: number = 0;

        Object.values(cartItems).map((item) => {
            text += `Товар: ${item.name}, Цена: ${item.price} руб, Количество: ${item.quantity}\n кг`;
            totalAmount += item.price
        })

        text += `\n\nСумма заказа: ${totalAmount} руб`

        axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .then(response => {
                reset();
                clearCart();
            })
            .catch(error => {
                console.error("Ошибка при отправке сообщения в Telegram", error);
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
                {errors.name && <div className="text-red-500">{errors.name.message}</div>}
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
                       className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
            </div>
            <div className="mt-4 flex justify-center">
                <Button type="submit" label="Оформить заказ" Delivery={true} />
            </div>
        </form>
    );
};

export default Feedback