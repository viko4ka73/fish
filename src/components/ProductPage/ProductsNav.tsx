
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = ({category, slugCategory} :any) => {
    const [hoverCategory, setHoverCategory] = useState(null);

    const handleCategoryClick = (category: any) => {
        setHoverCategory(category);
    };

    return (
                <div  className="flex m-10 items-center pl-10 ">
                    <Link
                        key={category}
                        to={`/products/${slugCategory}`}
                    >
                        <h3
                            className={`text-[32px] leading-none  underline font-bold font-montserrat text-white cursor-pointer ${hoverCategory === category ? "hover:text-dark-blue" : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </h3>
                    </Link>
                </div>
    );
}

export default ProductsNav;
