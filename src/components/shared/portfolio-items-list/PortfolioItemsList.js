import React from 'react';
import './PortfolioItemsList.css';
import PropsTypes from 'prop-types';
import CartItem from '../../../pages/cart/components/cart-item/CartItem';
import EditableItem from '../editable-item/EditableItem';

const PortfolioItemsList = (props) => (
    <ul className="flex-container">
        {
            props.isCart ? 
            props.portfolioItems.map((item) => {
                return <CartItem key={item.id} item={item} onDeleteItem={props.onDeleteItem}/>
            }) :
            props.portfolioItems.map((item) => {
                return <EditableItem key={item.id} item={item} {...props}/>
            })
        }
    </ul>
);

PortfolioItemsList.propsTypes = {
    portfolioItems: PropsTypes.arrayOf(PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        price: PropsTypes.number.isRequired,
        id: PropsTypes.number.isRequired
    })),
    onDeleteItem: PropsTypes.func.isRequired,
    onEditItem: PropsTypes.func,
    onItemClicked: PropsTypes.func,
    isCart:  PropsTypes.bool
}

PortfolioItemsList.defaultProps = {
    isCart: false
};
export default PortfolioItemsList;