import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, variant = 'fadeUp' }) => {
    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        slideInRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            variants={variants[variant] || variants.fadeUp}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
