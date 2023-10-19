import { navLinks } from "../constants";
import { headerLogo, headerSearch } from "../assets/images";
import Button from "../components/Button";
import NavMobile from "./NavMobile";

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
          <a href='/' className=" font-montserrat w-20  text-white font-bold text-lg">
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

        </div>

        <Button label="Корзина" href="/order" Cart={true} />

        <NavMobile />

      </nav>
    </header>
  )
}

export default Nav