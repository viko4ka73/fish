
import { useState } from 'react';

const ProductsNav = ({ categories, setSelectedCategories }: any) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (categories:any) => {
        setSelectedCategories(categories);
        setActiveCategory(categories);
    };



    return (
        <div className=" rounded-md pt-12">
        {categories.map((category: any, index: number) => (
            <div key={index} className="flex m-10 items-center pl-10 ">

                <h3
                    className={`text-[32px] leading-none font-bold font-montserrat cursor-pointer ${activeCategory === category ? "text-dark-blue" : "text-light-blue"}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </h3>
            </div>
        ))}
    </div>
    );
}

export default ProductsNav;
