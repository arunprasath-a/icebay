import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Using strictly verified High-Res Unsplash IDs that ARE confirmed to work
const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1502164980785-f8aa41d53611?w=1920&q=80', // Red Strawberry Popsicles
        title: 'PURE FRUIT PULP',
        subtitle: '100% NATURAL & FRESH',
        buttonText: 'VIEW FLAVOURS',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1543648964-18ab2541f71a?w=1920&q=80', // Assorted Popsicles
        title: 'FASTEST GROWING',
        subtitle: 'POPSICLE CHAIN IN INDIA',
        buttonText: 'FRANCHISE ENQUIRY',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1562602833-0f49213759bb?w=1920&q=80', // Tropical Vibes
        title: 'SPREAD HAPPINESS',
        subtitle: 'SHARE A STICK TODAY',
        buttonText: 'CONTACT US',
    }
];

const HeroSlider = () => {
    return (
        <div className="relative h-screen w-full bg-brand-navy overflow-hidden">
            <Swiper
                modules={[EffectFade, Autoplay, Pagination]}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                speed={1200} // Slightly slower for elegance
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full overflow-hidden">
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Background Image */}
                                <div className="absolute inset-0 transition-opacity duration-1000">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-full w-full object-cover"
                                        loading="eager"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d1?w=1920'; // Ultimate Fallback
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/60 to-transparent" />
                                </div>

                                {/* Content Overlay - Using Framer Motion with conditional key to force re-render/animation */}
                                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 pointer-events-none">
                                    <div className="max-w-5xl pointer-events-auto">
                                        <motion.div
                                            initial={false}
                                            animate={isActive ? "active" : "inactive"}
                                            variants={{
                                                active: { opacity: 1, y: 0 },
                                                inactive: { opacity: 0, y: 40 }
                                            }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >
                                            <motion.h2
                                                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="font-body text-brand-mango text-sm md:text-xl font-bold tracking-[0.5em] mb-4 uppercase"
                                            >
                                                {slide.subtitle}
                                            </motion.h2>

                                            <motion.h1
                                                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                                className="font-heading text-5xl md:text-8xl lg:text-[9.5rem] font-black text-white mb-10 leading-[0.9] tracking-tighter"
                                            >
                                                {slide.title}
                                            </motion.h1>

                                            <motion.button
                                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                                className="w-fit px-10 py-5 md:px-14 md:py-7 bg-brand-mango text-brand-navy font-black tracking-widest text-base md:text-xl hover:bg-white transition-all duration-300 uppercase rounded-sm shadow-2xl"
                                            >
                                                {slide.buttonText}
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                .swiper-pagination-bullet { width: 14px; height: 14px; background: white; opacity: 0.3; transition: all 0.3s ease; }
                .swiper-pagination-bullet-active { opacity: 1; background: #FACC15; width: 45px; border-radius: 7px; }
                
                /* FORCE HIDING INACTIVE SLIDES TO PREVENT GHOSTING */
                .swiper-slide {
                    transition: visibility 0s 1200ms, opacity 1200ms linear !important;
                    visibility: hidden;
                    opacity: 0 !important;
                }
                .swiper-slide-active {
                    visibility: visible;
                    opacity: 1 !important;
                    transition: visibility 0s, opacity 1200ms linear !important;
                }
            `}</style>
        </div>
    );
};

export default HeroSlider;
