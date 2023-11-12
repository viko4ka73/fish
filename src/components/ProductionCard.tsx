import { Link } from "react-router-dom"

type ProductionCardProps = {
    category: string;
    photos: string[];
    slugCategory: string;
}

const ProductionCard = ({ category, photos, slugCategory }: ProductionCardProps) => {
    return (
        <Link key={category}
            to={`/products/${slugCategory}`}>
            <div className="flex flex-col justify-between rounded-md ml-10 w-full h-[100%] rounded-br-[40px]
             bg-white  max-xl:mb-12  max-lg:mb-8 max-sm:mb-6">
                <h3 className="text-main-blue font-montserrat  text-[55px]  cursor-pointer
                        leading-none font-bold mt-4 ml-12 mobile-text-header max-xl:ml-8 max-lg:ml-6 max-sm:ml-4 "> {category}</h3>
                <div className="flex justify-end items-end">
                <img src={`${process.env.REACT_APP_VAR_API_URL}/${photos[0]}`} className="rounded-tl-[90%]  border-t-8 border-l-8 border-[#BFDBEC]
                 h-[45vh]  min-w-[100px] max-w-[800px] max-sm:h-[25vh]  object-cover object-center" alt={category} />
                </div>
            </div>
        </Link>
    )
}
export default ProductionCard


