

const ProductionCard = ({ name, img }: any) => {
    return (
        <div className="rounded-md  ml-10 rounded-br-[40px]  bg-white mb-20 ">
            <h3 className="text-main-blue font-montserrat text-4xl leading-normal font-bold mt-4 ml-12 max-2xl:text-[35px] "> {name}</h3>
            <div className="flex justify-end ">
                <img src={img} alt={name} />
            </div>

        </div>
    )
}

export default ProductionCard


