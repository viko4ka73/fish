import React from 'react';

const Button = ({ label, href, Cart, Order, Catalog, Enter, onClick, inCart  }: any) => {
  const buttonClass = `flex justify-center font-montserrat items-center border-none px-7 py-3 hover:ring-dark-blue hover:ring-2 
         ${Cart ? ' w-[215px] h-[40px] max-sm:h-[30px] max-md:w-[150px] rounded-md bg-extralight-blue   ' : ''}
         ${Order ? ' rounded-3xl w-[335px] max-lg:w-[250px] max-md:w-[230px] h-[40px] max-sm:w-[180px] max-[708px]:w-[195px] max-sm:h-[30px] max-md:h-[35px]  bg-white text-dark-blue' : ''}
         ${Catalog ? ' bg-main-blue rounded-3xl  ' : ''}
         ${Enter ? 'rounded-md py-2 px-4 w-full bg-main-blue ' : ''}
         ${inCart ? 'w-[190px] h-[35px] bg-main-blue rounded-xl ' :''}`;
      

  return (
    <button className={buttonClass} onClick={onClick}>
      {href ? (
        <a
          href={href}
          className={
            Cart
              ? 'text-dark-blue font-bold text-2xl max-2xl:text-xl   max-lg:text-[20px]  max-[708px]:text-[16px] max-sm:text-[14px] leading-normal'
              : Order
              ? 'max-2xl:text-xl max-[1900px]:text-2xl max-lg:text-[20px]  max-sm:text-[14px] font-normal max-[708px]:text-[16px] text-3xl leading-none'
              : Catalog
              ? 'text-4xl text-white font-bold max-2xl:text-3xl'
              : Enter
              ? 'text-2xl text-white font-bold'
              : ''
          }
        >
          {label}
        </a>
      ) : (
        <span
          className={
            Cart
              ? 'text-dark-blue font-bold text-2xl max-2xl:text-xl max-lg:text-[20px]  max-[708px]:text-[16px] max-sm:text-[14px] leading-normal'
              : Order
              ? 'max-2xl:text-xl max-[1900px]:text-2xl max-lg:text-[20px] font-normal  max-[708px]:text-[16px] max-sm:text-[14px]  text-3xl leading-none'
              : Catalog
              ? 'text-4xl text-white font-bold max-2xl:text-3xl'
              : Enter
              ? 'text-2xl text-white font-bold'
              : inCart 
              ? 'text-white font-bold text-2xl' 
              : ''
          }
        >
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
