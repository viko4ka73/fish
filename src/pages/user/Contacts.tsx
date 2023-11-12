import { contact, fishNetContact, fishnetLeft, waves2 } from "../../assets/images"

const Contacts = () => {
    return (
        <section className=" bg-extralight-blue pt-24 pb-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full"
            />
             <h2 className="text-dark-blue font-montserrat leading-normal  text-[74px] font-bold  mobile-text ml-16 mt-20 max-sm:mt-10  max-sm:ml-14">Контакты</h2>
            <img src={fishNetContact} alt="net" className="absolute right-0 z-0 w-[35%] max-xl:hidden" />
            <div className=" flex justify-center p-16  max-xl:p-8 mt-12  max-xl:mt-4 max-[2560px]:items-center ">
                <div className="rounded-3xl bg-light-blue w-full z-[1]  ">
                    <div className="flex ">
                        <div className="rounded-3xl z-[1] bg-extralight-blue my-16  ml-20 w-1/2 max-xl:w-full
                        flex flex-col justify-center items-center max-xl:m-8   max-md:m-4 h-screen">
                            <h3 className="text-dark-blue font-montserrat  text-[30px]  text-center
                            leading-normal font-bold mt-4  mobile-text-button mb-4 ">
                                Остались вопросы? <br />
                                Мы с радостью на них ответим!</h3>
                            <p className="font-montserrat text-[30px] text-center mobile-text-button font-normal text-info leading-normal mb-20 max-xl:mb-10" >
                                <span className="font-montserrat   font-semibold text-info"> <a href="https://t.me/+79251055066">Telegram </a>
                                    /  <a href="https://wa.me/+79251055066">WhatsApp: </a></span>
                                <a href="tel:+79251055066"> +7 925 105 5066 </a> <br />
                                <span className="font-montserrat  font-semibold text-info">   Электронная почта: </span>
                                <a href="mailto:kaspian-volna@mail.ru"> kaspian-volna@mail.ru</a>
                            </p>
                            <p className="font-montserrat  text-[30px] mobile-text-button text-center font-semibold text-info max-xl:mb-8">Время работы: с 9:00 до 21:00.</p>
                        </div>
                        <img
                            src={contact}
                            alt='contact'
                            className="p-6 ml-24 max-2xl:ml-2 max-xl:hidden "
                        />
                    </div>
                    <img src={fishnetLeft} alt="net" className="absolute  left-0 z-0 w-[41.5%] bottom-[25%]  max-xl:hidden" />
                </div>

            </div>
        </section>
    )
}

export default Contacts