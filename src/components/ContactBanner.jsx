import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const ContactBanner = () => {
    return (
        <section className="bg-brand-navy py-24 px-6 md:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-mango font-bold tracking-[0.3em] text-sm md:text-base uppercase block mb-4">WANT TO CHAT?</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">LET'S CONNECT</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-4">
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mango group-hover:text-brand-navy transition-all duration-300">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">PHONE</h3>
                        <p className="text-brand-cream/70 text-lg">+91 70104 94896</p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mango group-hover:text-brand-navy transition-all duration-300">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                        <p className="text-brand-cream/70 text-lg">mahalingam.09@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mango group-hover:text-brand-navy transition-all duration-300">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">LOCATION</h3>
                        <p className="text-brand-cream/70 text-lg">Cheyyar-604407, TamilNadu</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 border-t border-white/10 pt-16">
                    <div className="flex gap-8">
                        <a href="#" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-mango hover:text-brand-navy transition-all duration-300 shadow-lg">
                            <Instagram size={28} />
                        </a>
                        <a href="#" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-mango hover:text-brand-navy transition-all duration-300 shadow-lg">
                            <Facebook size={28} />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <button className="px-8 py-3 bg-white text-brand-navy font-black rounded-full hover:bg-brand-mango transition-all shadow-xl text-sm">GOOGLE PLAY</button>
                        <button className="px-8 py-3 bg-white text-brand-navy font-black rounded-full hover:bg-brand-mango transition-all shadow-xl text-sm">APP STORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
