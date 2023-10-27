import { delivery, waves2 } from "../../assets/images"
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const DeliveryPayment = () => {
    const points = [
        {
            coordinates: [55.749, 37.580],
            content: 'Каспийская волна',
        },
    ];

    return (
        <section className=" bg-extralight-blue pt-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
            <h2 className="text-dark-blue font-montserrat leading-normal  text-[74px] font-bold  mobile-text ml-16 mt-20 max-sm:mt-10  max-sm:ml-14">Доставка</h2>
            <div className=" flex justify-center p-16  max-xl:p-8 mt-12  max-xl:mt-4 max-[2560px]:items-center ">
                <div className="rounded-3xl bg-light-blue w-full z-[1]  ">
                    <div className="flex ">
                        <div className="rounded-3xl z-[1] bg-extralight-blue my-16  ml-20 w-1/2 max-xl:w-full
                        flex flex-col max-xl:m-8   max-md:m-4 h-screen">
                            <h3 className="text-dark-blue font-montserrat  text-[30px]  text-center
                            leading-normal font-bold mt-8  mobile-text-button mb-4 ">
                                Хотите оформить заказ? <br />
                                Заполните форму и мы вам перезвоним!</h3>
                            {/* <p className="font-montserrat text-[30px] text-center mobile-text-button font-normal text-info leading-normal mb-20 max-xl:mb-10" >
                                <span className="font-montserrat   font-semibold text-info"> <a href="https://t.me/+79251055066">Telegram </a>
                                    /  <a href="https://wa.me/+79251055066">WhatsApp: </a></span>
                                <a href="tel:+79251055066"> +7 925 105 5066 </a> <br />
                                <span className="font-montserrat  font-semibold text-info">   Электронная почта: </span>
                                <a href="mailto:kaspian-volna@mail.ru"> kaspian-volna@mail.ru</a>
                            </p>
                            <p className="font-montserrat  text-[30px] mobile-text-button text-center font-semibold text-info max-xl:mb-8">Время работы: с 9:00 до 21:00.</p> */}
                        </div>
                        <div className=" flex items-center flex-col mt-20 mr-10">
                            <img
                                src={delivery}
                                alt='contact'
                                className="p-6 ml-24 max-2xl:ml-2 max-xl:hidden "
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
                    <YMaps>
                        <div className="w-full rounded-bl-3xl rounded-br-3xl">
                            <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }}>
                                <ZoomControl options={{ size: 'small', position: { bottom: 100, right: 10 } }} />
                                {points.map(point => (
                                    <Placemark geometry={point.coordinates} properties={{ iconCaption: point.content }} />
                                ))}
                            </Map>
                        </div>
                    </YMaps>

                </div>

            </div>

        </section>
    )
}

export default DeliveryPayment