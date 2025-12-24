import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="block">FASTEST GROWING</span>
                    <span className="block text-primary">POPSICLE CHAIN</span>
                </h1>
                <p className="hero-subtitle">NO ADDED PRESERVATIVES | PURE FRUIT GOODNESS</p>
                <div className="hero-scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </div>
            {/* Placeholder for video background - using a high quality image for now */}
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1560008581-09826d948ea8?q=80&w=2574&auto=format&fit=crop"
                    alt="Ice popsicles background"
                />
            </div>
        </section>
    );
};

export default Hero;
