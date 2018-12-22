import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ type, label, onClick, additionalClass }) => {
    const btnClass = additionalClass ? `${additionalClass} button-default` : 'button-default'  
    return (

        <button onClick={onClick}
            type={type}
            className={btnClass}>
            {label}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    additionalClass: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    type: PropTypes.string.isRequired
};

export default Button;