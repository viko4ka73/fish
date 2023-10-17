import { mainWavesEnd } from "../assets/images";
import { headerLogo } from "../assets/images";
const Footer = () => {
    return (
        <div className="w-full">
            <img
                src={mainWavesEnd}
                alt='waves'
                className="w-full bg-extralight-blue "
            />
            <div className="flex w-full  bg-light-blue  justify-between px-20 items-center">
                <div className=" flex flex-col" >
                    <p className="font-montserrat text-2xl text-white font-normal leading-loose">
                        ИП Хочурыбку <br/>
                        ИНН 8904128000000<br/>
                        ОГРНИП 3217847000000000<br/>
                    </p>

                </div>
                <div>
                    <a href="tel:+79001111111" className="font-montserrat text-4xl   text-white font-bold ">+7 900 000 00 00</a>
                </div>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        className=' w-[311px] h-[278px] mb-4 '
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer