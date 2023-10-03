import { mainWavesEnd } from "../assets/images";
import { mainWavesStart } from "../assets/images";
import { headerLogo } from "../assets/images";
const Footer = () => {
  return (
    <div className="w-full">
        <img
        src={mainWavesEnd}
        alt='waves'
        className="w-full bg-extralight-blue "
      />
    <div className="flex w-full  bg-light-blue h-[250px] justify-between px-20 items-center ">
      <div className=" flex flex-col " >
        <p className="font-montserrat text-2xl text-white-400 font-normal leading-loose">
        ИП Хочурыбку <br/>
        ИНН 8904128000000<br/>
        ОГРНИП 3217847000000000<br/>
        </p>
  
      </div>
      <div>
      <a href="tel:+79001111111" className="font-montserrat text-4xl text-white-400 font-bold ">+7-900-111-11-11</a>
      </div>
      <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            className=' w-[250px] h-[250px]'
          />
        </a>
    </div>
    </div>
  )
}

export default Footer