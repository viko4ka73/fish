
import { navLinks } from "../constants";
// import { headerLogo } from "../assets/images";
import { headerCart } from "../assets/images";
import { headerSearch } from "../assets/images";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-extralight-blue'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          {/* <img
          src={headerLogo}
          alt='logo'
          width={129}
          height={29}
          className='m-0 w-[129px] h-[29px]'
        /> */}
          Здесь будет логотип
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg font-bold text-dark-blue hover:text-extradark-blue'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg  max-lg:hidden wide:mr-10'>
          <a className="leading-7 font-bold font-montserrat text-extradark-blue hover:text-dark-blue" href="tel:+79001111111">+7 (900) 111-11-11</a>

        </div>
        <img
          src={headerSearch}
          alt='cart'
          className='ml-2 w-6 h-6 mr-5 cursor-pointer'
        />
        <div className="mr-10 hidden">
          <input type='text' placeholder='Поиск товара ' className='search rounded-lg pr-4 w-[150px]' />
        </div>

        <button
          className="flex justify-center items-center h-12 gap-2 px-7 py-4 text-dark-blue border font-semibold  font-montserrat text-base leading-none bg-white-400 rounded-full hover:shadow-md"
        >
          Корзина
          <img
            src={headerCart}
            alt='cart'
            className='ml-2 w-8 h-8'
          />

        </button>
        {/* <img src={headerCart}
          alt='cart'
          width={129}
          height={29}
          className='m-0 w-[129px] h-[29px]'
        /> */}
        {/* <div className='hidden max-lg:block'>
        <img src={hamburger} alt='hamburger icon' width={25} height={25} />
      </div> */}
      </nav>
    </header>
  )
}

export default Nav