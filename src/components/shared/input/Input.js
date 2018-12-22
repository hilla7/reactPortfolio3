import React from 'react';
import './Input.css';
import PropsType from 'prop-types';

const Input = ({ value, placeholder, label, onChange }) => (
    <input className="input"
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, label)}
    ></input>
);

Input.propsType = {
    value: PropsType.string,
    placeholder: PropsType.string,
    onChange: PropsType.func.isRequired
}

export default Input;