const Button = ({ label, href, Cart, Order, Catalog, Enter, onClick, inCart, Delivery  }: any) => {
    const buttonClass = `flex justify-center font-montserrat items-center border-none 
        py-3 hover:ring-dark-blue hover:ring-2 
         ${Cart ? ' w-[215px] h-[40px] max-[1800px]:w-[250px]  max-sm:w-[100px] max-sm:h-[30px] max-md:w-[150px] max-lg:w-[200px]  rounded-md bg-extralight-blue   ' : ''}
         ${Order ? ' rounded-3xl w-[425px] h-[70px]  max-2xl:px-5  max-2xl:w-[320px]  max-2xl:h-[60px] max-lg:w-[220px] max-lg:h-[40px]  max-lg:px-1  max-sm:w-[160px]  max-sm:h-[30px] max-sm:px-1 bg-white text-dark-blue' : ''}
         ${Catalog ? ' bg-main-blue rounded-3xl max-sm:w-[190px] max-sm:py-1 px-7 max-sm:px-2 max-lg:w-[250px] max-2xl:w-[450px] max-lg:h-[50px] max-xl:w-[400px] max-xl:h-[60px]' : ''}
         ${Enter ? 'rounded-md py-2 px-4 w-full bg-main-blue ' : ''}
         ${inCart ? 'w-[190px] h-[35px] bg-main-blue rounded-xl max-md:w-[120px] ' :''}
         ${Delivery ? 'bg-light-blue text-white py-2 px-4 rounded-md' :''}`;


    return (
        <button className={buttonClass} onClick={onClick}>
            {href ? (
                <a
                    href={href}
                    className={
                        Cart
                            ? 'text-dark-blue font-bold text-2xl  max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px]  max-[708px]:text-[16px] leading-normal'
                            : Order
                                ? '  max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px] font-normal  max-[708px]:text-[16px]  text-[40px] leading-none'
                                : Catalog
                                    ? 'text-4xl text-white font-bold max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px]'
                                    : Enter
                                        ? 'text-2xl text-white font-bold'
                                        : inCart  ? 'text-white font-bold text-2xl mobile-text-button'
                                            : Enter
                                                ? 'text-2xl text-white font-bold'
                                                :  Delivery ? 'text-white font-bold text-2xl mobile-text-button'
                                                    : ''
                    }
                >
                    {label}
                </a>
            ) : (
                <span
                    className={
                        Cart
                            ? 'text-dark-blue font-bold text-2xl  max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px]  max-[708px]:text-[16px] leading-normal'
                            : Order
                                ? '  max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px] font-normal  max-[708px]:text-[16px]  text-[40px] leading-none'
                                : Catalog
                                    ? 'text-2xl text-white font-bold max-lg:text-[20px] max-xl:text-[25px]  max-2xl:text-[30px]'
                                    : Enter
                                        ? 'text-2xl text-white font-bold'
                                        : inCart
                                            ? 'text-white font-bold text-2xl mobile-text-button'
                                            : Delivery ? 'text-white font-bold text-2xl mobile-text-button'
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