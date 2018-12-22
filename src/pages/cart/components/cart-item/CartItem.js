import React from 'react';
import PropsTypes from 'prop-types';
import PortfolioItem from '../../../../components/shared/portfolio-item/PortfolioItem';

const CartItem = ({ item , onDeleteItem }) => (

    <li className="flex-item">
        <PortfolioItem item={item}
            isCart="true"
            deleteItem={() => onDeleteItem(item)} />
    </li>
);

CartItem.propsTypes = {
    item: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        price: PropsTypes.number.isRequired,
        id: PropsTypes.number.isRequired
    }),
    onDeleteItem: PropsTypes.func.isRequired,
    isCart: PropsTypes.bool.isRequired
}

export default CartItem;