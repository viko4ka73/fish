
import { arrow } from "../../assets/images"
const ProductsNav = ({ categories, selectedCategories }: any) => {
   
    return (
        <div className="bg-light-blue rounded-md ml-16 " >
            {/* <h1 className="text-4xl font-montserrat font-bold text-dark-blue p-10 pt-20">Продукция</h1> */}
            {categories.map((category: any, index: number) => (
                <div key={index} className="flex m-10 items-center p-10 pt-10">
                    <img src={arrow} alt={category} className="mr-10 w-10 h-10 cursor-pointer " />
                    <h3 className="text-white text-[32px]  leading-none font-bold hover:text-dark-blue font-montserrat cursor-pointer " onClick={() => selectedCategories(category)}>
                        {category}
                    </h3>
                </div>
            ))}
        </div>

    )
}

export default ProductsNav