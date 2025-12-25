import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

// Expanded list of flavors to show high variety
const products = [
    { id: 1, name: 'Strawberry Blast', color: 'bg-red-50', img: 'https://images.unsplash.com/photo-1543648964-18ab2541f71a?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Mango Magic', color: 'bg-yellow-50', img: 'https://images.unsplash.com/photo-1550410653-62586db71591?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Kiwi Zing', color: 'bg-green-50', img: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=800&auto=format&fit=crop' },
    { id: 4, name: 'Blueberry Pop', color: 'bg-blue-50', img: 'https://images.unsplash.com/photo-1525996825619-2776c1236f01?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: 'Orange Peel', color: 'bg-orange-50', img: 'https://images.unsplash.com/photo-1549488344-c7052f3fc947?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: 'Litchi Love', color: 'bg-pink-50', img: 'https://images.unsplash.com/photo-1549490333-e51381387d37?q=80&w=800&auto=format&fit=crop' },
    { id: 7, name: 'Grapes Galore', color: 'bg-purple-50', img: 'https://images.unsplash.com/photo-1516559143985-69798db4d084?q=80&w=800&auto=format&fit=crop' },
    { id: 8, name: 'Watermelon Wave', color: 'bg-emerald-50', img: 'https://images.unsplash.com/photo-1562602833-0f49213759bb?q=80&w=800&auto=format&fit=crop' },
    { id: 9, name: 'Lemon Chill', color: 'bg-yellow-50', img: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d1?q=80&w=800&auto=format&fit=crop' },
    { id: 10, name: 'Apple Spark', color: 'bg-red-50', img: 'https://images.unsplash.com/photo-1549395156-e8c1e9f43adf?q=80&w=800&auto=format&fit=crop' },
    { id: 11, name: 'Coconut Cream', color: 'bg-slate-50', img: 'https://images.unsplash.com/photo-1560008581-2a6d4ee2c28b?q=80&w=800&auto=format&fit=crop' },
    { id: 12, name: 'Mixed Berries', color: 'bg-rose-50', img: 'https://images.unsplash.com/photo-1488900128632-89687429621ad?q=80&w=800&auto=format&fit=crop' }
];

const ProductSlider = () => {
    return (
        <div className="relative w-full px-4 md:px-12 py-24 bg-brand-cream border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2 border-b border-gray-200 pb-10">
                <div className="max-w-2xl">
                    <span className="block text-brand-blue font-black tracking-[0.4em] mb-4 text-xs md:text-sm uppercase">PURE & NATURAL</span>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight mb-4">OUR FLAVOURS</h2>
                    <p className="text-brand-navy/60 text-lg md:text-xl font-medium italic">Experience the burst of 35+ natural flavours.</p>
                </div>
                <div className="flex gap-4 mt-8 md:mt-0">
                    <button className="swiper-button-prev-custom w-14 h-14 rounded-full border-2 border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-500 hover:scale-110">
                        <FaChevronLeft size={20} />
                    </button>
                    <button className="swiper-button-next-custom w-14 h-14 rounded-full border-2 border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-500 hover:scale-110">
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1440: { slidesPerView: 5, spaceBetween: 25 },
                }}
                className="w-full"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <motion.div
                            whileHover={{ y: -15 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            className="group cursor-pointer py-10"
                        >
                            <div className={`h-[400px] w-full rounded-[2.5rem] overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] transition-all duration-500 ${product.color}`}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1543648964-18ab2541f71a?q=80&w=800';
                                    }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/95 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-3 leading-none">{product.name}</h3>
                                    <div className="flex gap-2">
                                        <span className="inline-block px-3 py-1 bg-brand-mango/90 text-[#050810] text-[9px] font-black rounded-full tracking-widest uppercase">
                                            REAL FRUIT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
