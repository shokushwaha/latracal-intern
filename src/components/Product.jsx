import { useState } from 'react';
import { motion } from 'framer-motion';
const Product = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className='bg-gray-200 m-4 p-2 rounded-md w-[30%] flex items-center shadow-xl  transition-all duration-300 z-100'>

            <div>
                <img src={`/${product.imgLink}`} alt={product.name} />
            </div>
            <div className='ml-4 pb-4'>
                <h3 className='font-semibold text-2xl'>{product.name}</h3>
                <p className='text-gray-600'>{product.description}</p>
                <p>Price: <span className='font-bold ml-2'>
                    ${product.price}
                </span>
                </p>
                <button onClick={toggleDetails}
                    className='bg-black text-gray-200 px-2 py-1 rounded-md mt-2 ]'>{showDetails ? 'Hide Details' : 'Show Details'}</button>

            </div>
            <div>
                {showDetails && (
                    <motion.div
                        className="container text-center flex flex-col items-start"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}>
                        <p className='text-gray-600'>Additional Details:</p>
                        <p>{product.details}</p>
                        <p>Dimensions: {product.dimensions}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Product;
