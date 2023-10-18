import { mainWavesStart} from "../../assets/images";

const AboutUs = () => {
    return (
        <section>
            <div className="bg-light-blue  w-full  flex flex-col items-center justify-center h-[700px] ">
                <h1 className="text-[64px] font-montserrat font-bold  leading-[123%] pt-[20%] text-white text-center ">
                    <span className="text-dark-blue">Каспийская волна </span>
                    - восхитительные <br /> морепродукты, доставленные прямо <br />  к вашему столу</h1>
                <img
                    src={mainWavesStart}
                    alt='waves'
                    className="w-full pt-[8%]"
                />
            </div>
            <div className="bg-extralight-blue padding ">
                <h1 className="text-dark-blue font-montserrat text-[64px] font-bold mb-20 mt-16">О нас</h1>
                <p className="font-montserrat  leading-tight font-normal text-3xl mb-10">
                    <span className="text-dark-blue font-semibold text-justify text-4xl">"Каспийская волна" </span>
                    - компания, специализирующаяся
                    на продаже высококачественных морепродуктов. Мы предлагаем широкий
                    ассортимент свежих и вкусных морепродуктов, доставляемых прямо из источника.
                </p>
                <span className="text-dark-blue  font-montserrat font-semibold text-justify text-4xl" > Наши ценности:</span>
                <div className="grid grid-cols-3 gap-10 mb-24">
                    <div className="rounded-md mt-10 bg-white p-10">
                        <h3 className="text-main-blue font-montserrat text-[32px] leading-normal font-bold"> Качество </h3>
                        <p className="font-montserrat text-left leading-tight font-normal text-xl ">  Мы предлагаем только самые свежие и высококачественные морепродукты, 
                        чтобы наши клиенты могли наслаждаться их неповторимым вкусом.</p>
                    </div>
                    <div className="rounded-md mt-10 bg-white  p-10">
                        <h3 className="text-main-blue font-montserrat text-[32px] leading-normal font-bold"> Удобство </h3>
                        <p className="font-montserrat  text-left leading-tight font-normal text-xl ">  Мы стремимся сделать процесс заказа и доставки максимально удобным и простым для наших клиентов.
                        Гибкие варианты доставки, чтобы каждый мог получить морскую свежесть прямо у себя дома.</p>
                    </div>
                    <div className="rounded-md mt-10 bg-white p-10">
                        <h3 className="text-main-blue font-montserrat text-[32px] leading-normal font-bold"> Партнерство </h3>
                        <p className="font-montserrat  text-left leading-tight font-normal text-xl ">  Мы ценим наших клиентов и  строим 
                        долгосрочные партнерские отношения на основе взаимного доверия и уважения.</p>
                    </div>
                </div>
                <span className="text-dark-blue  font-montserrat font-semibold text-justify text-4xl">Наши продукты:</span>
                <p className="font-montserrat  leading-tight font-normal text-3xl mt-4">Мы предлагаем широкий ассортимент морепродуктов, включая свежие морские рыбы, креветки, устрицы, кальмары, мидии и многое другое.
                    Все наши продукты проходят строгий контроль качества, чтобы гарантировать безопасность и свежесть.</p>
            </div>
        </section>
    )
}

export default AboutUs