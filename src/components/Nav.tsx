
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { headerSearch } from "../assets/images";
import Button from "./Button";

const Nav = () => {
  return (
    <header className='padding-x py-2 absolute z-10 w-full bg-dark-blue'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={80}
            className='m-0 w-[129px] h-[80px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-8 max-lg:hidden '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-2xl font-bold  max-2xl:text-lg   text-white-400 hover:text-light-blue'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="relative flex items-center mr-24 max-2xl:mr-12 max-2xl:ml-6">
          <img
            src={headerSearch}
            alt='cart'
            className='w-5 h-5 absolute ml-3 pointer-events-none '
          />
          <input type='text' className='search w-[372px]   pr-3 pl-10  max-2xl:w-[250px]  py-2  rounded-md border-none focus:ring-extralight-blue focus:ring-2' />

        </div>
 
        <Button label="Корзина" href="/order" Cart={true} />
        {/* <div className='hidden max-lg:block'>
        <img src={hamburger} alt='hamburger icon' width={25} height={25} />
      </div> */}
      </nav>
    </header>
  )
}

export default Nav