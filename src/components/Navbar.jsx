import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-3xl font-black tracking-tighter text-white">
                    ICE <span className="text-brand-mango">BAY</span>
                </Link>

                {/* Mobile Toggle */}
                <div className="md:hidden cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-12 items-center">
                    {['HOME', 'FLAVOURS', 'FRANCHISE'].map((item) => (
                        <li key={item}>
                            <Link
                                to="/"
                                className="text-sm font-black tracking-widest text-white hover:text-brand-mango transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className="bg-brand-mango text-brand-navy px-8 py-3 rounded-sm font-black text-xs tracking-widest hover:bg-white transition-all">
                            CONTACT
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-brand-navy flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="absolute top-8 right-8 text-white cursor-pointer" onClick={() => setIsOpen(false)}>
                        <X size={40} />
                    </div>
                    {['HOME', 'FLAVOURS', 'FRANCHISE'].map((item) => (
                        <Link
                            key={item}
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-black text-white hover:text-brand-mango uppercase tracking-tighter"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
