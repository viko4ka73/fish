import { fishingMan, waves } from "../../assets/images"
import { Button } from "../../components"

const Error = () => {
    return (
        <section className=" bg-extralight-blue">
            <img
                src={waves}
                alt='waves'
                className="w-full pt-5"
            />
            <div className="h-screen bg-extralight-blue flex flex-col justify-center items-center">
            <img
                src={fishingMan}
                alt='fishing'
                className=" pb-5"
            />
            <span className="text-dark-blue text-[50px] leading-none font-montserrat font-bold text-center mb-10">
                    Извините рыбки уплыли...
                    <br/> Ловим новых
            </span>
                <Button label="Вернуться на главную" Catalog={true} href='/home'/>
            </div> 
        </section>
    )
}

export default Error