import React from 'react';
import PortfolioItem from '../portfolio-item/PortfolioItem';
import PropsTypes from 'prop-types';

const EditableItem = ({ item, onItemClicked, onDeleteItem, onEditItem, isCart }) => (

    <li onClick={() => onItemClicked(item)}
        className="flex-item">
        <PortfolioItem item={item}
            isCart={isCart}
            deleteItem={() => onDeleteItem(item)}
            editItem={() => onEditItem(item)}
        />
    </li>
);


EditableItem.propsTypes = {
    item: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        price: PropsTypes.number.isRequired,
        id: PropsTypes.number.isRequired
    }),
    onDeleteItem: PropsTypes.func.isRequired,
    onEditItem: PropsTypes.func,
    onItemClicked: PropsTypes.func,
    isCart: PropsTypes.bool.isRequired
}

export default EditableItem;