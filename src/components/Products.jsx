import products from '../products.json'
import ProductsList from './ProductsList'
const Products = () => {
    return (
        <>
            <span className='text-center block bg-gray-300 py-4 text-2xl font-semibold'>
                Products
            </span>
            <ProductsList products={products} />
        </>
    )
}

export default Products