import { delivery, waves2 } from "../../assets/images"
import { Button } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";

const DeliveryPayment = () => {

    interface FormData {
        name: string;
        phone: string;
        comment: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    console.log(process.env)
    const onSubmit = (data: FormData) => {

        const telegramToken: string = process.env.REACT_APP_VAR_TG_TOKEN!;
        console.log("token", telegramToken)
        const chatId: string = process.env.REACT_APP_VAR_CHAT_ID!;
        let text: string = `Поступил вопрос! \n\nИмя: ${data.name}\nТелефон: ${data.phone}\n\nВопрос:\n${data.comment}`;

        axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .then(response => {
                reset();
            })
            .catch(error => {
                console.error("Ошибка при отправке вопроса в Telegram", error);
            });

    }

    const phoneRegExp = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

    return (
        <section className=" bg-extralight-blue pt-20 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
            <h2 className="text-dark-blue font-montserrat leading-normal  text-[74px] font-bold  mobile-text ml-16 mt-20 max-sm:mt-10  max-sm:ml-14">Доставка</h2>
            <div className=" flex justify-center p-16  max-xl:p-8 mt-8   max-xl:mt-4 max-[2560px]:items-center ">
                <div className="rounded-3xl bg-light-blue w-full z-[1]  ">
                    <div className="flex justify-around ">
                        <div className="rounded-3xl z-[1] bg-extralight-blue my-16  ml-10 w-1/2 max-xl:w-full 
                        flex flex-col max-xl:m-8   max-md:m-4">
                            <h3 className="text-dark-blue font-montserrat  text-[30px]  text-center
                            leading-normal font-bold mt-8  mobile-text-button mb-4  max-[400px]:p-2">
                                Хотите задать нам вопрос? <br />
                                Заполните форму и мы вам перезвоним!</h3>
                            <form className="p-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            
                                <div className="mb-2 flex max-xl:flex-col max-xl:items-start items-center justify-between  ">
                                    <label className="block text-dark-blue p-2 ">
                                        <span className="font-montserrat  font-medium  text-xl leading-none"> Имя </span>
                                    </label>
                                    <input type="text" className="w-[60%] max-xl:w-full border border-gray-300
                                         rounded-md py-2 px-3 focus:outline-none focus:border-main-blue"
                                        {...register("name", { required: "Введите ваше ваше имя!" })} />
                                </div>
                                {errors.name && <div className="text-[#FF6B6B] flex justify-end mb-2">{errors.name.message}</div>}
                                <div className="mb-2 flex max-xl:flex-col max-xl:items-start  items-center justify-between ">
                                    <label className="block text-dark-blue p-2 ">
                                        <span className="font-montserrat font-normal  text-xl leading-none"> Номер телефона </span>
                                    </label>
                                    <input type="tel" className="w-[60%] max-xl:w-full border
                                     border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue"
                                        {...register("phone", {
                                            required: "Введите номер телефона!",
                                            minLength: {
                                                value: 6,
                                                message: "Номер не может быть короче 6 символов!"
                                            },
                                            pattern: {
                                                value: phoneRegExp,
                                                message: "Некорректный формат номера телефона"
                                            }
                                        })} />  
                                </div>
                                {errors.phone && <div className="text-[#FF6B6B] flex justify-end mb-2">{errors.phone.message}</div>}
                                <div className="mb-2 flex max-xl:flex-col max-xl:items-start items-start justify-between">
                                    <label className="block text-dark-blue p-2">
                                        <span className="font-montserrat font-normal text-xl leading-none">Ваш вопрос</span>
                                    </label>
                                    <textarea
                                        className="w-[60%] h-72 max-xl:w-full  max-h-72 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue"
                                        {...register("comment", { required: "Необходимо ввести описание заказа!", minLength: { value: 6, message: "Вопрос должен сожержать минимум 6 букв!" } })}
                                    ></textarea>       
                                </div>
                                {errors.comment && <div className="text-[#FF6B6B]  flex justify-end">{errors.comment.message}</div>}
                                <div className="mt-4 flex justify-end ">
                                    <Button type="submit" label="Отправить" Delivery={true}></Button>
                                </div>
                            </form>
                        </div>
                        <div className=" flex items-center flex-col mt-20 mr-10  max-md:hidden ">
                            <img
                                src={delivery}
                                alt='contact'
                                className="p-6  max-2xl:ml-2 max-xl:hidden "
                            />
                            <div className="flex  flex-col ml-10">
                                <p className="font-montserrat text-[30px] text-left mobile-text-button font-semibold text-white leading-normal mb-10" >
                                    Самовывоз заказа по адресу: <br /> г. Санкт-Петербург, ул. Рыбка, д.1, кв.1
                                </p>
                                <p className="font-montserrat text-[30px] text-left mobile-text-button font-semibold text-white leading-normal  mb-10" >  Доставка по адресу
                                    от <span className="text-dark-blue">5000 </span>рублей </p>
                                <p className="font-montserrat text-[30px] text-left mobile-text-button font-semibold text-white leading-normal  mb-10" >   Время работы с 9:00 до 21:00.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default DeliveryPayment