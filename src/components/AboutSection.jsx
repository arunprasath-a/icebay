import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1549395156-e8c1e9f43adf?q=80&w=2574&auto=format&fit=crop" alt="Ice Bay Story" />
                        <div className="about-decoration"></div>
                    </div>
                    <div className="about-text">
                        <h2 className="section-title">ABOUT <span className="text-secondary">ICE BAY</span></h2>
                        <p className="lead-text">
                            We are on a mission to bring back the nostalgia of ice popsicles with a modern twist.
                        </p>
                        <p>
                            ICE BAY is the fastest growing popsicle chain in India. We pride ourselves on using
                            zero preservatives and only real fruit pulp to create our refreshing treats.
                            Our journey began with a simple idea: to serve happiness on a stick.
                        </p>
                        <p>
                            Every flavour tells a story, and every bite is a burst of natural goodness. Contact us to become a part in our journey.
                        </p>
                        <button className="btn btn-primary mt-4">READ OUR STORY</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
