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
                <h1 className="text-dark-blue font-montserrat text-[68px] font-bold mb-20   max-xl:mb-14   max-lg:mb-10  max-md:mb-12  max-sm:mb-8   mt-16  m
                 max-lg:mt-1  max-md:mt-4  max-sm:mt-2 mobile-text">О нас</h1>
                <p className="font-montserrat  leading-tight font-normal text-[55px] mb-10 text-info mobile-text-header">
                    <span className="text-main-blue  font-semibold  text-justify text-[64px] mobile-text ">"Каспийская волна" </span>
                    — компания, специализирующаяся
                    на продаже высококачественных морепродуктов. Мы предлагаем широкий
                    ассортимент свежих и вкусных морепродуктов, доставляемых прямо из источника.
                </p>
                <div className=" mt-16">
                    <span className="text-dark-blue  font-montserrat font-bold text-justify text-[68px] mobile-text"> Наши ценности:</span>
                    <div className="grid grid-cols-3 gap-10 mb-24 max-[1800px]:grid-cols-2 max-md:grid-cols-1">
                        <div className="rounded-md mt-10 bg-white p-10">
                            <h3 className="text-main-blue font-montserrat  text-[55px]  leading-normal font-bold mobile-text"> Качество </h3>
                            <p className="font-montserrat text-left leading-tight font-normal text-[45px] text-info mobile-info-text">  Мы предлагаем только самые свежие и высококачественные морепродукты,
                                чтобы наши клиенты могли наслаждаться их неповторимым вкусом.</p>
                        </div>
                        <div className="rounded-md mt-10 bg-white  p-10">
                            <h3 className="text-main-blue font-montserrat text-[55px]  leading-normal font-bold mobile-text"> Удобство </h3>
                            <p className="font-montserrat  text-left leading-tight font-normal text-[45px]  text-info mobile-info-text">  Мы стремимся сделать процесс заказа и доставки максимально удобным и простым для наших клиентов.
                                Гибкие варианты доставки, чтобы каждый мог получить морскую свежесть прямо у себя дома.</p>
                        </div>
                        <div className="rounded-md mt-10 bg-white p-10">
                            <h3 className="text-main-blue font-montserrat  text-[55px]   leading-normal font-bold mobile-text"> Партнерство </h3>
                            <p className="font-montserrat  text-left leading-tight font-normal text-[45px] text-info  mobile-info-text">  Мы ценим наших клиентов и  строим
                                долгосрочные партнерские отношения на основе взаимного доверия и уважения.</p>
                        </div>
                    </div>
                    <span className="text-main-blue  font-montserrat font-bold text-justify text-[68px] mobile-text">Наши продукты:</span>
                    <p className="font-montserrat  leading-tight font-normal text-[64px] mt-4 mobile-text-header text-info">Мы предлагаем широкий ассортимент морепродуктов, включая свежие морские рыбы, креветки, устрицы, кальмары, мидии и многое другое.
                        Все наши продукты проходят строгий контроль качества, чтобы гарантировать безопасность и свежесть.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs