import Product from "./Product"
const ProductsList = ({ products }) => {
    return (
        <>
            <div className="flex gap-4 flex-wrap">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductsList