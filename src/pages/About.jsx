import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../layout/PageHero';
import Logo from '../assets/Logo.png';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: .3 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
};

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5, // Ajusta el retraso según sea necesario
            duration: 0.5
        }
    }
};

const underlineAnimate = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 1,
            duration: .8,
        },
    },
};

const About = () => {
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title="Acerca de Lennita BB" />
            <div className='w-full py-20'>
                <div className='w-[85vw] flex mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 '>
                        <div>
                            <motion.img 
                                src={Logo} 
                                alt="Lennita BB" 
                                className="w-full" 
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        </div>
                        <div>
                            <motion.h2 className='text-4xl lg:text-6xl font-bold capitalize tracking-wider'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >
                                Nuestra Historia
                                <svg
                                    className="svg-underline stroke-[#ac1cff] relative z-10 w-1/2"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={7}
                                    viewBox="0 0 422 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                        variants={underlineAnimate}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.h2>
                            <motion.p className='leading-10 text-gray-600 py-8 text-lg'
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: .5, duration: .8 }}
                            >
                                ¡Bienvenidos a Lennita BB! Somos un emprendimiento artesanal ubicado en Santa Clara del Mar, Argentina. Nos especializamos en la producción de adorables muñequitos de amigurumis hechos con mucho amor y dedicación.
                                En Lennita BB, cada creación es única, diseñada para traer alegría y diversión a tu vida. Desde simpáticos animales hasta personajes fantásticos, nuestros amigurumis son el regalo perfecto para todas las ocasiones.
                                ¡Déjanos ser parte de tus momentos especiales con nuestros encantadores muñequitos de amigurumis!
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default About;
