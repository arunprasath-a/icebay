import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <section className="contact-banner">
            <div className="container contact-container">
                <h2 className="contact-title">LET'S CONNECT</h2>

                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <Phone size={24} color="#1565C0" />
                        </div>
                        <p>+91 70104 94896</p>
                    </div>

                    <div className="contact-item">
                        <div className="icon-circle">
                            <Mail size={24} color="#1565C0" />
                        </div>
                        <p>mahalingam.09@gmail.com</p>
                    </div>

                    <div className="contact-item">
                        <div className="icon-circle">
                            <MapPin size={24} color="#1565C0" />
                        </div>
                        <p>Cheyyar-604407, TamilNadu</p>
                    </div>
                </div>

                <div className="social-links">
                    <a href="#" className="social-icon">
                        <Instagram size={30} />
                    </a>
                    <a href="#" className="social-icon">
                        <Facebook size={30} />
                    </a>
                </div>

                <div className="app-buttons">
                    <button className="btn-app store-btn">Google Play</button>
                    <button className="btn-app store-btn">App Store</button>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
