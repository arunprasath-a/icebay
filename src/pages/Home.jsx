import React, { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductSlider from '../components/ProductSlider';
import ScrollReveal from '../components/ScrollReveal';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import SEO from '../components/SEO';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        /* REMOVED overflow-x-hidden to prevent double scrollbars on windows */
        <div className="home-page">
            <SEO
                title="Home"
                description="Welcome to IceBay - The coolest popsicle chain in town. Experience natural flavors like never before."
            />
            <HeroSlider />

            <ScrollReveal variant="fadeUp">
                <AboutSection />
            </ScrollReveal>

            <ScrollReveal variant="slideInRight">
                <ProductSlider />
            </ScrollReveal>

            <ScrollReveal variant="fadeUp">
                <ContactBanner />
            </ScrollReveal>
        </div>
    );
};

export default Home;
