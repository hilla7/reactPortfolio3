import React from 'react';
import Image from '../../../../components/shared/image/Image';
import PropTypes from 'prop-types';

const Section = ({ title, body, imageUrl }) => (
    <div>
        <h1>{title}</h1>
        <div>{body}</div>
        <Image
            width="500"
            src={imageUrl}
            alt="Lorem" />
    </div>
);


Section.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default Section;