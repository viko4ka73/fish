
import { navLinks } from "../../../../CLONE/fish/src/constants";
import { hamburger, headerLogo } from "../assets/images";
import { headerSearch } from "../assets/images";
import Button from "../../../../CLONE/fish/src/components/Button";

const Nav = () => {
  return (
    <header className='padding-x py-2.5 absolute z-10 w-full bg-nav-blue'>
      <nav className='flex justify-between items-center max-container'>
        <div className="flex items-center ">
          <img
            src={headerLogo}
            alt='logo'
            width={100}
            height={80}
            className='m-0 w-[100px] h-[80px]'
          />
          <a href='/fish/public' className=" font-montserrat w-20  text-white font-bold text-lg">
            Каспийская волна
          </a>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-[70px]  max-[1400px]:hidden '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-xl font-bold  text-white hover:text-dark-blue'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="relative flex items-center max-2xl:mr-2 mr-20  max-2xl:ml-6">
          <img
            src={headerSearch}
            alt='cart'
            className='w-5 h-5 absolute ml-3 pointer-events-none '
          />
          {/* <input type='text' className='search w-[372px]  pr-2 pl-10  max-2xl:w-[250px]  py-2  rounded-md border-none focus:ring-extralight-blue focus:ring-2' /> */}

        </div>

        <Button label="Корзина" href="/order" Cart={true} />
        <div className='hidden max-[1400px]:block'>
          <img src={hamburger} alt='hamburger icon' width={50} height={50} />
        </div>
      </nav>
    </header>
  )
}

export default Nav