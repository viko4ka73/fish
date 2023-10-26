

const ProductionCard = ({ name, img }: any) => {
    return (
        <div className="rounded-md w-[90%] ml-10 rounded-br-[40px]  bg-white mb-20 max-xl:mb-12  max-lg:mb-8 max-sm:mb-6">
            <h3 className="text-main-blue font-montserrat  text-[64px]  leading-normal font-bold mt-4 ml-12 mobile-text-header max-xl:ml-8 max-lg:ml-6 max-sm:ml-4  "> {name}</h3>
            <div className="flex justify-end ">
                <img src={img} alt={name} />
            </div>

        </div>
    )
}

export default ProductionCard


