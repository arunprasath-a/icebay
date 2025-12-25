import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-24 px-6 md:px-24 bg-brand-cream overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1549395156-e8c1e9f43adf?q=80&w=1200&auto=format&fit=crop"
                            alt="Ice Bay Story"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-mango opacity-20 rounded-full blur-3xl -z-0"></div>
                </div>

                <div className="w-full md:w-1/2">
                    <span className="text-brand-mango font-black tracking-[0.3em] text-sm block mb-4 uppercase">OUR JOURNEY</span>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-tight">
                        ABOUT <span className="text-brand-blue">ICE BAY</span>
                    </h2>

                    <p className="text-lg md:text-xl font-semibold text-brand-navy/80 mb-6 italic border-l-4 border-brand-mango pl-6">
                        "We are on a mission to bring back the nostalgia of ice popsicles with a modern twist."
                    </p>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            ICE BAY is the fastest growing popsicle chain in India. We pride ourselves on using
                            zero preservatives and only real fruit pulp to create our refreshing treats.
                            Our journey began with a simple idea: to serve happiness on a stick.
                        </p>
                        <p>
                            Every flavour tells a story, and every bite is a burst of natural goodness.
                            Our popsicles are more than just treats; they are memories in the making.
                        </p>
                    </div>

                    <button className="mt-10 px-10 py-4 bg-brand-navy text-white font-bold tracking-widest hover:bg-brand-blue transition-all duration-300 rounded-sm shadow-xl">
                        READ OUR STORY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
