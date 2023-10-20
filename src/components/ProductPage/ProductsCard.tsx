import Button from "../Button"
// import slug from "slug";

const ProductsCard = ({ name, price, photos }: any) => {
    return (

        <div className="w-full z-[1]  ">
            <a href="#">
                <img className="w-[375px] h-[375px] object-cover object-center rounded-lg" src={`http://127.0.0.1:1337/${photos}`} alt="product image" />
            </a>
            <div className="pt-5">
                <a href="#">
                    {/* <h3 className="text-main-blue font-montserrat text-xl font-normal">{slug(name)}</h3> */}
                     {/* {/* <h3 className="text-main-blue font-montserrat text-xl font-normal">{name}</h3> */}
                </a>
                <div className="flex items-center justify-between pt-3">
                    <span className="text-dark-blue font-montserrat text-xl font-semibold">{price} ₽/кг</span>
                    <Button label="В корзину" inCart={true} />
                </div>
            </div>
        </div>

    )
}

export default ProductsCard