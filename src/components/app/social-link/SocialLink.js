import React from 'react';
import './SocialLink.css'
import PropsTypes from 'prop-types';

const SocialLink = ({ url, label }) => (
    <a className="link"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {label}
    </a>
)

SocialLink.propsTypes = {
    url: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired
}

export default SocialLink;