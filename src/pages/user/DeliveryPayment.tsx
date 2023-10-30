import { useState } from "react";
import { delivery, waves2 } from "../../assets/images"
import { Button } from "../../components";

const DeliveryPayment = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');


    const handleForm = async () => {
        console.log();

    };
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
                                Хотите оформить заказ? <br />
                                Заполните форму и мы вам перезвоним!</h3>
                            <form className="p-8 flex flex-col ">
                                <div className="mb-4 flex max-xl:flex-col max-xl:items-start items-center justify-between  ">
                                    <label className="block text-dark-blue p-2 ">
                                        <span className="font-montserrat  font-medium  text-xl leading-none"> ФИО </span>
                                    </label>
                                    <input type="text" id="name" value={name}
                                        onChange={(event) => setName(event.currentTarget.value)}
                                        name="name" className="w-[60%] max-xl:w-full border border-gray-300 
                                         rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                                </div>
                                <div className="mb-4 flex max-xl:flex-col max-xl:items-start  items-center justify-between ">
                                    <label className="block text-dark-blue p-2 ">
                                        <span className="font-montserrat font-normal  text-xl leading-none"> Номер телефона </span>
                                    </label>
                                    <input type="tel" id="phone" value={phone}
                                        onChange={(event) => setPhone(event.currentTarget.value)}
                                        name="phone" className="w-[60%] max-xl:w-full border
                                     border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
                                </div>                     
                                <div className="mb-4 flex max-xl:flex-col max-xl:items-start items-start justify-between">
                                    <label className="block text-dark-blue p-2">
                                        <span className="font-montserrat font-normal text-xl leading-none">Описание заказа</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(event) => setDescription(event.currentTarget.value)}
                                        name="description"
                                        className="w-[60%] h-72 max-xl:w-full  max-h-72 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue"
                                    ></textarea>
                                </div>
                                <div className="mt-4 flex justify-end ">
                                    <Button type="submit" label="Отправить" Delivery={true} onClick={handleForm} ></Button>
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