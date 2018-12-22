import React, { Component } from 'react';
import './PortfolioItem.css';
import Button from '../button/Button';
import Image from '../image/Image'
import { FaTrash, FaEdit } from 'react-icons/fa';
import PropsTypes from 'prop-types';

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleEditItem(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.editItem();
    }

    handleDeleteItem(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.deleteItem();
    }

    render() {
        const { item, isCart } = this.props;
        return (
            <div>
                <h3 className="title">
                    {this.props.item.title}
                </h3>
                <hr className="separator" />
                <Image height="150" width="150" src={item.imageUrl} alt={item.title} />
                <div>{item.price} ILS</div>
                {!isCart ? <Button onClick={this.handleEditItem} label={<FaEdit />} type="button" /> : null}
                <Button onClick={this.handleDeleteItem} label={<FaTrash />} type="button" />
            </div>
        );
    }
}

PortfolioItem.propsTypes = {
    item: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        description: PropsTypes.string,
        imageUrl: PropsTypes.string.isRequired,
        price: PropsTypes.number.isRequired,
        id: PropsTypes.number.isRequired
    }),
    editItem: PropsTypes.func,
    deleteItem: PropsTypes.func.isRequired,
    isCart: PropsTypes.bool
}

PortfolioItem.defaultProps = {
    isCart: false
};

export default PortfolioItem;