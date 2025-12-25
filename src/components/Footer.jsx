import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050810] text-gray-400 py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">ICE <span className="text-brand-mango">BAY</span></h3>
                    <p className="text-sm opacity-60">Pure fruit pulp, zero preservatives.</p>
                </div>

                <div className="text-center">
                    <p className="text-sm font-bold text-white mb-1 tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} ICE BAY_CHEYYAR
                    </p>
                    <p className="text-xs opacity-40">All Rights Reserved.</p>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs font-bold leading-loose">
                        Designed with Passion by <span className="text-brand-mango">Arun</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
