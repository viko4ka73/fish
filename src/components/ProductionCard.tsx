import { Link } from "react-router-dom"


const ProductionCard = ({ category, photos }: any) => {
    return (
        <Link key={category}
        to={category}>
        <div className="rounded-md w-[90%] ml-10 rounded-br-[40px]  bg-white mb-20 max-xl:mb-12  max-lg:mb-8 max-sm:mb-6">        
                <h3 className="text-main-blue font-montserrat  text-[64px]  cursor-pointer
                        leading-normal font-bold mt-4 ml-12 mobile-text-header max-xl:ml-8 max-lg:ml-6 max-sm:ml-4 "> {category}</h3>
            <div className="flex justify-end bg-[#BFDBEC]  rounded-tl-[85%]">
                <img src={`http://127.0.0.1:1337/${photos[0]}`} className=" h-[500px] rounded-tl-[90%]  w-full object-cover object-center" alt={category} />
            </div>
        </div>
        </Link>
    )
}
export default ProductionCard


