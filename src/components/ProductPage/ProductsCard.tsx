import Button from "../Button"


const ProductsCard = ({ name, price }: any) => {
    return (
        <div className=""> 
            <div className="rounded-md  ml-10 bg-white mb-20 w-full h-full z-10">
                    {/* <img src={photos} alt={name} /> */}
            </div>
            <h3 className="text-main-blue font-montserrat text-xl font-normal"> {name} </h3>
                <div className="flex">
                    <p className="text-dark-blue font-montserrat text-xl font-semibold"> {price}/кг</p>
                    <Button label="В корзину" inCart={true}/>
                </div>
           
        </div>
    )
}

export default ProductsCard