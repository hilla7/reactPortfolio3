import React from 'react';
import { Link } from 'react-router-dom';
import T from 'i18n-react';

const MenuItem = ({item}) => {
    return (
        <li className="item">
            <Link to={item.path}>
                <T.span text={{ key: item.key }} />
            </Link>
        </li>
    )
};

export default MenuItem;