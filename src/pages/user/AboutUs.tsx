import { mainWavesStart } from "../../assets/images";

const AboutUs = () => {
    return (
        <section className="pt-24">
            <div className="bg-light-blue z-10 w-full pt-32  max-[2560px]:h-[550px] max-[1800px]:h-[470px] max-2xl:h-[420px] max-2xl:pt-24  
            max-xl:h-[280px]  max-xl:pt-12 max-lg:h-[285px] max-[965px]:h-[275px] max-[965px]:pt-14 max-[915px]:pt-16
           max-md:h-[250px] max-md:pt-20  max-sm:h-[210px]  max-sm:pt-14  max-[550px]:pt-18   max-[550px]:h-[210px] max-[537px]:h-[220px]  max-[492px]:h-[250px]
           max-[413px]:h-[245px] ">
                <div className="flex justify-center items-center pt-[2%] ">
                    <div className="flex flex-col items-center mb-12 max-[550px]:mb-10
                 max-[611px]:px-0.5 max-[890px]:px-1 max-[965px]:px-5  ">
                        <h1 className="text-[64px] mobile-text-header max-[550px]:px-10 max-[406px]:px-2 max-2xl:mb-10 max-lg:mb-6 max-[465px]:mb-2  max-sm:mb-2;
                    font-montserrat font-bold leading-[123%] max-[1800px]:mb-10 text-white text-center mb-16 max-md:mb-3 max-xl:mb-4 ">
                            <span className="text-dark-blue text-[74px] mobile-text "> Каспийская волна </span>
                            — восхитительные <br /> морепродукты, доставленные прямо <br />  к вашему столу</h1>

                    </div>

                </div>
                <div>
                </div>
                <img
                    src={mainWavesStart}
                    alt='waves'
                    className="w-full "
                />
            </div>
            <div className="bg-extralight-blue padding ">
                <h1 className="text-dark-blue font-montserrat text-[60px] font-bold mb-20   max-xl:mb-14   max-lg:mb-10  max-md:mb-12  max-sm:mb-8   mt-16  m
                 max-lg:mt-1  max-md:mt-4  max-sm:mt-2 mobile-text">О нас</h1>
                <p className="font-montserrat  leading-tight font-normal text-[55px] mb-10 text-info  mobile-info-text">
                    <span className="text-main-blue  font-semibold  text-justify text-[58px] mobile-text ">"Каспийская волна" </span>
                    — компания, специализирующаяся на продаже деликатесов из морепродуктов. Мы предлагаем избранный ассортимент свежих и вкусных морепродуктов, каждый из которых доставляется прямо из источника, обеспечивая непревзойденное качество и уникальный вкус.
                </p>
                <div className=" mt-16">
                    <span className="text-dark-blue  font-montserrat font-bold text-justify text-[60px] mobile-text"> Наши ценности:</span>
                    <div className="grid grid-cols-2 gap-10 mb-24  max-md:grid-cols-1">
                        <div className="rounded-md mt-10 bg-white p-10">
                            <h3 className="text-main-blue font-montserrat  text-[55px]  leading-normal font-bold mobile-text"> Качество </h3>
                            <p className="font-montserrat text-left leading-tight font-normal text-[45px] text-info mobile-info-text">  Мы предлагаем только самые свежие высококачественные морепродукты,
                                чтобы наши клиенты могли наслаждаться их неповторимым вкусом.</p>
                        </div>
                        <div className="rounded-md mt-10 bg-white p-10">
                            <h3 className="text-main-blue font-montserrat  text-[55px]   leading-normal font-bold mobile-text"> Партнерство </h3>
                            <p className="font-montserrat  text-left leading-tight font-normal text-[45px] text-info  mobile-info-text">  Мы ценим наших клиентов и  строим
                                долгосрочные партнерские отношения на основе взаимного доверия и уважения.</p>
                        </div>
                        <div className="rounded-md mt-10 bg-white  p-10">
                            <h3 className="text-main-blue font-montserrat text-[55px]  leading-normal font-bold mobile-text"> Удобство </h3>
                            <p className="font-montserrat  text-left leading-tight font-normal text-[45px]  text-info mobile-info-text">  Мы прилагаем все усилия, чтобы процесс заказа и доставки был легким и понятным для наших клиентов. Мы предлагаем стандартные опции доставки, чтобы вы могли наслаждаться изысканными морскими деликатесами, не выходя из дома.</p>
                        </div>
                        <div className="rounded-md mt-10 bg-white  p-10">
                            <h3 className="text-main-blue font-montserrat text-[55px]  leading-normal font-bold mobile-text"> Инновации </h3>
                            <p className="font-montserrat  text-left leading-tight font-normal text-[45px]  text-info mobile-info-text">  Мы постоянно ищем новые способы улучшения вкуса и качества нашей продукции, следуя последним тенденциям в области кулинарии и пищевых технологий. Наша цель — предложить клиентам не только традиционные вкусы, но и уникальные гастрономические открытия.</p>
                        </div>
                    </div>
                    <span className="text-main-blue  font-montserrat font-bold text-justify text-[60px] mobile-text">Наши продукты:</span>
                    <p className="font-montserrat indent-3.5 leading-tight font-normal text-[45px] mt-4 mobile-info-text text-info">Наша продукция представляет собой эксклюзивный выбор лучших деликатесов, включая икру и рыбу горячего и холодного копчения, все из которых вылавливается в богатых водах Астраханской области. Мы обладаем специальными квотами на вылов, что позволяет нам обеспечивать неизменное качество и свежесть каждой партии. Строгий контроль на каждом этапе обработки гарантирует, что до вашего стола попадают только лучшие продукты, соответствующие самым высоким стандартам.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs