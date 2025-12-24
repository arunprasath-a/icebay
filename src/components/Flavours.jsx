import React from 'react';
import './Flavours.css';

const flavours = [
    {
        id: 1,
        name: 'WATERMELON',
        image: 'https://images.unsplash.com/photo-1540510522770-eaf3b64c0C21?q=80&w=2670&auto=format&fit=crop',
        color: '#ff6b6b'
    },
    {
        id: 2,
        name: 'PINEAPPLE',
        image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2669&auto=format&fit=crop',
        color: '#feca57'
    },
    {
        id: 3,
        name: 'RASMALAI',
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d1?q=80&w=2606&auto=format&fit=crop',
        color: '#f8c291'
    },
    {
        id: 4,
        name: 'GUAVA',
        image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?q=80&w=2671&auto=format&fit=crop',
        color: '#6ab04c'
    }
];

const Flavours = () => {
    return (
        <section className="flavours section-padding">
            <div className="container">
                <h2 className="section-title text-center">
                    OUR <span className="text-secondary">FLAVOURS</span>
                </h2>
                <p className="text-center section-subtitle">DISCOVER THE TASTE OF PURE HAPPINESS</p>

                <div className="flavours-grid">
                    {flavours.map((item) => (
                        <div key={item.id} className="flavour-card">
                            <div className="flavour-image-container">
                                <img src={item.image} alt={item.name} className="flavour-image" />
                                <div className="flavour-overlay" style={{ backgroundColor: item.color + 'aa' }}></div>
                            </div>
                            <div className="flavour-info">
                                <h3>{item.name}</h3>
                                <button className="btn-text">EXPLORE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-outline">VIEW ALL FLAVOURS</button>
                </div>
            </div>
        </section>
    );
};

export default Flavours;
