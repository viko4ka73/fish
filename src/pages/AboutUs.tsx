import { mainWavesStart} from "../assets/images";

const AboutUs = () => {
    return (
        <div>
        <div className="bg-light-blue z-10 w-full  h-[800px]">
                <div className="flex items-center justify-center p-[4%]">
                    <h1 className="text-[64px] font-montserrat font-bold  leading-[123%] p-[10%] text-white text-center ">
                        <span className="text-dark-blue">Каспийская волна </span>
                        - восхитительные <br/> морепродукты, доставленные прямо <br/>  к вашему столу</h1>
                </div>
            <div>
            <img
                src={mainWavesStart}
                alt='waves'
                className="w-full "
            />
            </div>
        </div>
        <div className="bg-extralight-blue">
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        Много много информации<br/>
        </div>
        </div>
    )
}

export default AboutUs