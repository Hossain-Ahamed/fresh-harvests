import React from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import config from "../../../config";
import { useLocation } from "react-router-dom";

const SEO = ({
    title = config.TITLE, // Default title
    description = config.DESCRIPTION, // Default meta description
    ogTitle,
    ogDescription,
    ogImage = config.OG_IMAGE, // Default OG image
    ogUrl ,
    canonicalUrl ,
    twitterTitle,
    twitterDescription,
    twitterImage,
}) => {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <Helmet prioritizeSeoTags>

                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href={canonicalUrl || `${config.SITE_URL}${location.pathname}`} />

                <meta property="og:title" content={ogTitle || title} />
                <meta property="og:description" content={ogDescription || description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site" content={config.SITENAME}  />
                <meta property="og:url" content={ogUrl || `${config.SITE_URL}${location.pathname}`} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={config.SITENAME} />
                <meta name="twitter:title" content={twitterTitle || title} />
                <meta name="twitter:description" content={twitterDescription || description} />
                <meta name="twitter:image" content={twitterImage || ogImage} />
            </Helmet>
        </>
    );
};

export default SEO;
