import { fishingMan, waves2 } from "../../assets/images"
import Button from "../../components/Button"

const Error = () => {
    return (
        <section className=" bg-extralight-blue pt-20">
            <img
                src={waves2}
                alt='waves'
                className="w-full pt-5"
            />
            <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
            <img
                src={fishingMan}
                alt='fishing'
                className=" pb-5 max-xl:w-[300px] max-lg:w-[200px]"
            />
            <span className="text-dark-blue text-[64px] mx-20  mobile-text-header leading-none font-montserrat font-bold text-center mb-10">
                    Извините рыбки уплыли...
                    <br/> Ловим новых
            </span>
                <Button label="Вернуться на главную" Catalog={true} href='/home'/>
            </div> 
        </section>
    )
}

export default Error