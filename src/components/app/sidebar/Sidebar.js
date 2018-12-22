import React from 'react';
import './Sidebar.css';
import SocialLinks from '../social-links/SocialLinks';
import { MENU_ITEMS, CART_ITEM, LOGIN_ITEM } from '../../../mocks/portfolio-menu-items.mock';
import userService from '../../../services/user.service';
import MenuItem from '../menu-item/MenuItem';

const Sidebar = ({locale}) => {
    const items = [...MENU_ITEMS, userService.checkIfUserIsAuthenticated() ? CART_ITEM : LOGIN_ITEM];
    
    return (
        <div className="sidebar">
            <ul >
                {
                    items.map(item => {
                        return <MenuItem key={item.label} item={item} locale={locale}/>
                    })
                }
            </ul>
            <SocialLinks />
        </div>
    )
};

export default Sidebar;