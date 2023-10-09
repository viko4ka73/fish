import React from 'react';

const Button = ({ label, href, Cart, Order, Catalog, Enter, onClick  }: any) => {
  const buttonClass = `flex justify-center font-montserrat items-center border-none px-7 py-3 hover:ring-main-blue hover:ring-2 
         ${Cart ? ' w-[215px] h-[40px] rounded-md bg-extralight-blue ' : ''}
         ${Order ? ' rounded-3xl w-[335px] bg-white text-dark-blue' : ''}
         ${Catalog ? ' bg-main-blue rounded-3xl hover:ring-light-blue hover:ring-2 ' : ''}
         ${Enter ? 'rounded-md py-2 px-4 w-full bg-main-blue ' : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {href ? (
        <a
          href={href}
          className={
            Cart
              ? 'text-dark-blue font-bold text-2xl max-2xl:text-xl  leading-normal'
              : Order
              ? 'max-2xl:text-xl max-[1900px]:text-2xl  font-normal  text-3xl leading-none'
              : Catalog
              ? 'text-4xl text-white-400 font-bold max-2xl:text-3xl'
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
              ? 'text-dark-blue font-bold text-2xl max-2xl:text-xl  leading-normal'
              : Order
              ? 'max-2xl:text-xl max-[1900px]:text-2xl  font-normal  text-3xl leading-none'
              : Catalog
              ? 'text-4xl text-white-400 font-bold max-2xl:text-3xl'
              : Enter
              ? 'text-2xl text-white font-bold'
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
