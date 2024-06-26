import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';
import './featuredProducts.css'; // Importa el archivo CSS aquí

const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <div className='w-[80vw] mx-auto py-40 text-center'>
            <div className='text-center'>
                <h2 className='text-4xl  text-[#9F5D23]  capitalize tracking-widest mb-3 font-bold leading-none'>Diseños Disponibles</h2>
                <div className='w-24 h-1 bg-purple-200 mx-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16'>
                {products.slice(0, 3).map((product, index) => (
                    <div key={product.id}>
                        <div className='relative rounded-md'>
                            <Link to={`/products/${product.id}`} className='flex items-center justify-center absolute bg-[#222] w-full h-[225px] rounded-md opacity-0 hover:opacity-70 transition-all duration-300'>
                                <span className='flex items-center justify-center bg-purple-200 w-10 h-10 rounded-full'>
                                    <FaSearch />
                                </span>
                            </Link>
                            <img className='w-full h-[225px] block object-contain rounded product-image' src={product.image} alt={product.name} style={{ animationDelay: `${index * 0.2}s` }} />
                        </div>
                        <footer className='flex mt-4 justify-between items-center'>
                            <h4 className='mb-0  text-[#9F5D23] font-normal'>{product.name}</h4>
                            <p className='mb-0 font-semibold italic text-purple-500 tracking-widest'>{product && product.price ? `$${Number(product.price).toLocaleString('es-AR')}` : ''}
                            </p>
                        </footer>
                    </div>
                ))}
            </div>
            <Link className='inline-block mx-auto uppercase text-center px-6 py-3 mt-4 bg-purple-500 text-white font-semibold shadow-lg rounded hover:bg-[#F1D8F4]  transition-all duration-300' to='/products'>
                todos los diseños
            </Link>
        </div>
    );
};

export default FeaturedProducts;
