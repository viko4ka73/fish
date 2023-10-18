import { arrow } from "../../assets/images"

const ProductsName = ({ category}: any) => {
    return (
            <div className="flex m-10 items-center ">
                {/* <img src={icon} alt={category} className="mr-10 w-12 h-12" /> */}
                <img src={arrow} alt={category} className="mr-10 w-10 h-10 cursor-pointer "/>
                <h3  className="text-white text-[32px]  leading-none font-bold hover:text-dark-blue font-montserrat cursor-pointer ">  
                    {category}
                </h3>
            </div>
    )
}


export default ProductsName