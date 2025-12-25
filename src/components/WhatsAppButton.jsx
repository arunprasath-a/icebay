import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    // Replace with actual number
    const phoneNumber = "919876543210";
    const message = "Hello! I would like to know more about IceBay.";

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Contact on WhatsApp"
        >
            <FaWhatsapp size={32} />
        </button>
    );
};

export default WhatsAppButton;
