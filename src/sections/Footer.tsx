import { email, mainWavesEnd, telegram, whatsapp } from "../assets/images";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Footer = () => {
    return (
        <div className="w-full bg-light-blue ">
            <img
                src={mainWavesEnd}
                alt='waves'
                className="w-full bg-extralight-blue "
            />
            <div className="flex w-full max-container bg-light-blue  pt-4
            max-xl:flex-col  max-xl:items-end  max-md:items-center justify-between  px-20 items-center">
                <div className=" flex flex-col  max-[400px]:flex-row  max-[400px]:gap-4" >
                    <div className="flex gap-3 ">
                        <a href="https://t.me/+79251055066">
                            <img src={telegram} alt='tg' />
                        </a>
                        <a href="https://wa.me/+79251055066">
                            <img src={whatsapp} alt='whatsapp' />
                        </a>
                        <a href="tel:+79251055066" className="font-montserrat max-[400px]:hidden
                        mobile-text-nav  text-[30px] text-white font-normal leading-loose">+7 925 105 5066 </a>
                    </div>
                    <div className="flex gap-3">
                        <img src={email} alt='email' className="cursor-pointer" />
                        <a href="mailto:kaspian-volna@mail.ru" className="font-montserrat max-[400px]:hidden
                         mobile-text-nav text-[30px] text-white font-normal leading-loose cursor-pointer">  kaspian-volna@mail.ru </a>
                    </div>

                </div>
                <ul className='flex-1 flex justify-center  text-[30px] max-[1800px]:flex-col max-[1800px]:gap-[15px]  max-xl:flex-row max-xl:gap-3
                items-center gap-[70px] max-[795px]:hidden '>
                    {navLinks.map((item) => (
                        <li key={item.label}>   
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal 
                                mobile-text-button   font-bold  text-white hover:text-dark-blue'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        className=' w-full mb-4 max-md:hidden '
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer