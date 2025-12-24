import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', color: '#fff', padding: '20px 0', textAlign: 'center', fontSize: '0.8rem' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} ICE BAY_CHEYYAR. All Rights Reserved.</p>
                <p style={{ marginTop: '5px', opacity: 0.7 }}>Designed by Arun</p>
            </div>
        </footer>
    );
};

export default Footer;
