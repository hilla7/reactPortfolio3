import { FaShoppingCart, FaHome, FaThList, FaPlusSquare, FaInfo, FaSignInAlt, } from "react-icons/fa";
import React from 'react';
export const MENU_ITEMS = [
    { key: 'home', label: 'Home', path: '/home', icon: <FaHome /> },
    { key: 'portfolio', label: 'Portfolio List', path: '/items', icon: <FaThList /> },
    { key: 'newItem', label: 'Add New Item', path: '/items/new', icon: <FaPlusSquare /> },
    { key: 'about', label: 'About', path: '/about', icon: <FaInfo /> },
]

export const CART_ITEM = { key: 'cart', label: 'Cart', path: '/cart', icon: <FaShoppingCart /> };
export const LOGIN_ITEM = { key: 'login', label: 'Login', path: '/login', icon: <FaSignInAlt /> };