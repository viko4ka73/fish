import { Link } from "react-router-dom"
import Button from "../Button"

const ProductsCard = ({ name, price, photos, slugName }: any) => {
    return (
        <div className="w-full z-[1]">
            
            <Link
                key={name}
                to={slugName}
            >
                <img className="w-[375px] h-[375px] object-cover object-center rounded-lg" src={`http://127.0.0.1:1337/${photos[0]}`} alt="product image" />
            </Link>
            <div className="pt-5">
                <Link
                    key={name}
                    to={slugName}
                >
                    <h3 className="text-main-blue font-montserrat text-xl font-normal">{name}</h3>
                </Link>
                <div className="flex items-center justify-between pt-3">
                    <span className="text-dark-blue font-montserrat text-xl font-semibold">{price} ₽/кг</span>
                    <Button label="В корзину" inCart={true} />
                </div>
            </div>
        </div >

    )
}

export default ProductsCard