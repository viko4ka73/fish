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
                        ИП КаспийскаяВолна <br/>
                        ИНН 8904128000000<br/>
                        ОГРНИП 3217847000000000<br/>
                    </p>

                </div>
                <div>
                    <a href="tel:+79251055066" className="font-montserrat text-4xl   text-white font-bold ">+7 (925) 105-50-66</a>
                </div>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        className=' max-w-[230px] max-h-[200px] mb-4 '
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer