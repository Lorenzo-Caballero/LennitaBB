import React from 'react';

import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
    return (
        <div className='bg-gradient-to-br from-[#4779a4] to-[#f7e7ce] w-full min-h-[20vh] flex items-center'>
            <div className='w-[80vw] mx-auto'>
                <h3 className='sm:text-2xl md:text-[2rem] capitalize font-bold tracking-wider text-white'>
                    <Link className='text-primary' to="/">Inicio </Link>
                    {product && <Link className='text-primary' to="/products">/ Diseños </Link>}/ {title}
                </h3>
            </div>
        </div>
    );
};

export default PageHero;