import React from 'react';
import './PortfolioItemView.css';
import Button from '../../../../components/shared/button/Button';
import { FaTimes } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import userService from '../../../../services/user.service';
import cartService from '../../../../services/cart.service';
import portfolioService from '../../../../services/portfolio.service';
import Image from '../../../../components/shared/image/Image';

const PortfolioItemView = ({ match, history }) => {
    const id = match.params.id;
    const item = portfolioService.getItemById(id);
    const buttonLabel = userService.checkIfUserIsAuthenticated() ? "Add To Cart" : "Login To start purchasing";
    return (
        <div className="item-view">
            <div className="close-btn">
                <Button onClick={() => history.push('/items')} label={<FaTimes />} type="button" />
            </div>
            <h1 className="title">
                {item.title}   <span className="price"> {item.price} ILS</span>
            </h1>
            <div className="item-content">
                <div className="item-image">
                    <Image height="600" width="800" src={item.imageUrl} alt={item.title} />
                </div>
                <div className="description">
                    {item.description}
                    <div>
                        <Button additionalClass="shop-btn" 
                        onClick={() => onAddToCartClicked(item, history)} 
                        label={buttonLabel} type="button" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const onAddToCartClicked = (item, history) => {
    if (cartService.addItem(item)) {
        alert(`Item added to cart!`);
    }
    history.push('/cart');
};

export default withRouter(PortfolioItemView);