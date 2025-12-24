import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Flavours from '../components/Flavours';
import ContactBanner from '../components/ContactBanner';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <AboutSection />
            <Flavours />
            <ContactBanner />
        </div>
    );
};

export default Home;
