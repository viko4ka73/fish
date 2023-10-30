import { Link } from "react-router-dom"


const ProductionCard = ({ category, photos, slugCategory }: any) => {
    return (
        <Link key={category}
            to={`/products/${slugCategory}`}>
            <div className="rounded-md ml-10 w-full  rounded-br-[40px]  bg-white mb-20 max-xl:mb-12  max-lg:mb-8 max-sm:mb-6">
                <h3 className="text-main-blue font-montserrat  text-[64px]  cursor-pointer
                        leading-normal font-bold mt-4 ml-12 mobile-text-header max-xl:ml-8 max-lg:ml-6 max-sm:ml-4 "> {category}</h3>
                <div className="flex justify-end  ">
                    <img src={`http://127.0.0.1:1337/${photos[0]}`} className="rounded-tl-[90%]  border-t-8 border-l-8 border-[#BFDBEC]  
                 h-[45vh]  min-w-[100px] max-w-[800px] max-sm:h-[25vh]  object-cover object-center" alt={category} />
                </div>
            </div>
        </Link>
    )
}
export default ProductionCard


