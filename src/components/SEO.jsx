import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title} | IceBay India</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={`${title} | IceBay India`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Natural Popsicles',
    description: 'IceBay - The fastest growing popsicle chain in India. 100% natural ingredients, fresh fruits, and pure happiness.',
    keywords: 'popsicles, ice cream, natural, fruit, franchise, india, icebay',
};

export default SEO;
