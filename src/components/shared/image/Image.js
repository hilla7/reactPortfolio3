import React from 'react';
import './Image.css';
import PropTypes from 'prop-types';

const Image = ({ height, width, src, alt }) => (
    <div className="image">
        <img height={height}
            width={width}
            src={src}
            alt={alt} />
    </div>
);

Image.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
};

Image.defaultProps = {
    height: "200",
    width: "200",
    alt: "image"
};

export default Image;