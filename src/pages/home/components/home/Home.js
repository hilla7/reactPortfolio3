import React from 'react';
import { MENU_ITEMS, CART_ITEM } from '../../../../mocks/portfolio-menu-items.mock';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
    <ul className="flex-container">
        {
            [...MENU_ITEMS, CART_ITEM].map(item => {
                if (item.label === 'Home') return undefined;
                return <li className="home-menu-item"
                    key={item.label}>
                    <Link className="home-link" to={item.path}><div>{item.label}</div> <div className="menu-icon">{item.icon}</div></Link>
                </li>
            })
        }
    </ul>

);

export default Home;