
import { useState } from 'react';
import { Link } from 'react-router-dom';

type ProductsNavProps = {
    category: string;
    slugCategory: string;
    onSelectCategory?: (category: any) => void;
}

const ProductsNav = ({category, slugCategory, onSelectCategory} :ProductsNavProps) => {
    const [hoverCategory, setHoverCategory] = useState(null);

    const handleCategoryClick = (category: any) => {
        setHoverCategory(category);
        if (onSelectCategory) {
            onSelectCategory(category);
        }
    };

    return (
                <div  className="flex m-10 items-center pl-10  max-md:m-8  max-[320px]:pl-4    ">
                    <Link
                        key={category}
                        to={`/products/${slugCategory}`}
                    >
                        <h3
                            className={`text-[32px] leading-none mobile-info-text  underline font-bold font-montserrat text-white cursor-pointer ${hoverCategory === category ? "hover:text-dark-blue" : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </h3>
                    </Link>
                </div>
    );
}

export default ProductsNav;
