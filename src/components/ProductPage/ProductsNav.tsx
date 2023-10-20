import ProductsName from "./ProductsName"

const ProductsNav = ({apiData}:any) => {
    return (
        <div className="bg-light-blue rounded-md">
            <h1 className="text-4xl font-montserrat font-bold text-dark-blue p-10 pt-20">Продукция</h1>
            {apiData.map((product: { id: any }) => (
                <ProductsName key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductsNav