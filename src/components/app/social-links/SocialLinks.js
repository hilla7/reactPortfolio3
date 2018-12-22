import React from 'react';
import SocialLink from '../social-link/SocialLink';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './SocialLinks.css';

const LINKS = [
    {
        label: <FaTwitter />,
        url: 'https://twitter.com/?lang=en'
    },
    {
        label: <FaFacebook />,
        url: 'https://www.facebook.com/'
    },
    {
        label: <FaLinkedinIn />,
        url: 'https://www.linkedin.com'
    },
    {
        label: <FaInstagram />,
        url: 'https://www.instagram.com'
    }
]

const SocialLinks = () => (
    <div className="links">
        {LINKS.map((link) => {
            return <SocialLink key={link.url} url={link.url} label={link.label} />
        })}
    </div>
);

export default SocialLinks;