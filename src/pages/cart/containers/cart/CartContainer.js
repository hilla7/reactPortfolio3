import React, { Component } from 'react';
import PortfolioItemsList from '../../../../components/shared/portfolio-items-list/PortfolioItemsList';
import cartService from '../../../../services/cart.service';
import { Link } from 'react-router-dom';
import './CartContainer.css';

class CartContainer extends Component {

    state = {
        items: [],
    };

    componentDidMount() {
        this.setState({ items: cartService.getItems() });
    }

    handleDeleteItem = (item) => {
        this.setState({
            items: cartService.deleteItem(item)
        });
    }

    render() {
        const { items } = this.state;
        return (
            items.length ?
                <PortfolioItemsList portfolioItems={items}
                    onDeleteItem={this.handleDeleteItem}
                    isCart="true" /> :
                <div className="empty">Your Shopping Cart is empty!
                    <div>
                        <Link to="/items">Start shopping now!</Link>
                    </div>
                </div>
        );
    }
}

export default CartContainer;