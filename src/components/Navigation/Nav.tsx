import { navLinks } from "../../constants";
import { headerLogo } from "../../assets/images";
import Button from "../Button";
import NavMobile from "./NavMobile";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
const Nav = () => {

  const { cartItemCount } = useContext(ShopContext)!;

  return (
    <header className='padding-x py-2.5 absolute z-10 w-full bg-nav-blue'>
      <nav className='flex justify-between items-center max-container'>
        <div className="flex items-center ">
          <a href="/">
            <img
              src={headerLogo}
              alt='logo'
              className='m-0 w-[100px] h-[80px]'
            />
          </a>
          <a href='/' className=" font-montserrat w-20  text-white font-bold  max-2xl:hidden text-lg max-sm:hidden">
            Каспийская волна
          </a>
        </div>
        <ul className='flex-1 flex justify-center text-[30px] items-center gap-[70px]  max-[1400px]:hidden '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal mobile-text-nav   font-bold  text-white hover:text-dark-blue'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          {cartItemCount > 0 ? (
            <div className="relative inline-flex items-center">
              <span className="rounded-full bg-[#FF6B6B]  text-white text-xs w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center">
                {cartItemCount.toFixed(0)}
              </span>
              <Button label={`Корзина`} href="/order" Cart={true} />
            </div>
          ) : <Button label={`Корзина`} href="/order" Cart={true} />}

          <NavMobile />
        </div>
      </nav>
    </header>
  )
}

export default Nav