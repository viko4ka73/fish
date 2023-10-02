const Button = ({ label, href, Cart, Order, Catalog, }: any) => {
    const buttonClass = `flex justify-center font-montserrat items-center border-none px-7 py-3 hover:ring-main-blue hover:ring-2 
         ${Cart ? 'text-dark-blue w-[215px] h-[40px] rounded-md font-bold text-xl leading-normal bg-extralight-blue ' : ''}
         ${Order ? ' rounded-3xl w-[335px] bg-white text-dark-blue' : ''}
         ${Catalog ? ' bg-main-blue rounded-3xl hover:ring-light-blue hover:ring-2 ' : ''}`;

    return (
        <button className={buttonClass}>
            <a href={href} className={Order ? 'max-2xl:text-xl max-[1900px]:text-2xl  font-normal  text-3xl leading-none' : Catalog ? 'text-4xl text-white-400 font-bold max-2xl:text-3xl' : ''}>
                {label}
            </a>
        </button>
    );
};

export default Button



