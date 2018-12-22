import React from 'react';
import './Header.css';
import translations from '../../../services/translation.service'
import Button from '../../shared/button/Button';

const Header = ({ onLocaleChanged }) => (
    <header className="header">
        React Portfolio
        <span className="langs">
            <Button onClick={() => onLocaleChanged(translations.he)} label="He" type="button"/>
            <Button onClick={() => onLocaleChanged(translations.en)} label="En" type="button"/>
        </span>
    </header>
);

export default Header;