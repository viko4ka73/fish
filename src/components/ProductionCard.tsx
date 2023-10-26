

const ProductionCard = ({ category, photos }: any) => {
    return (
        <div className="rounded-md  h-[555px] ml-10  bg-white mb-20 ">

            <h3 className="text-main-blue font-montserrat text-4xl leading-normal font-bold mt-4 ml-12 max-2xl:text-[35px]"> {category}</h3>
            <div className="flex justify-end bg-[#BFDBEC]  rounded-tl-[85%]">
                <img src={`http://127.0.0.1:1337/${photos[0]}`} className=" h-[467px] rounded-tl-[90%] w-[500px] object-cover" alt={category} />
            </div>

        </div>
    )
}

export default ProductionCard


