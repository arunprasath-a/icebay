import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    ICE BAY
                </Link>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} color="white" /> : <Menu size={28} color={scrolled ? 'black' : 'white'} />}
                </div>
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>FLAVOURS</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>FRANCHISE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
