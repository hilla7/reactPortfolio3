import React, { Component } from 'react';
import PortfolioItemsList from '../../../../components/shared/portfolio-items-list/PortfolioItemsList';
import portfolioService from '../../../../services/portfolio.service';
import { withRouter } from 'react-router-dom';

class PortfolioContainer extends Component {

    state = {
        portfolioItems: [],
    };

    componentDidMount() {
        this.setState({ portfolioItems: portfolioService.getItems() });
    }

    handleDeleteItem = (item) => {
        this.setState({
            portfolioItems: portfolioService.deleteItem(item)
        });
    }

    handleEditItem = (item) => {
        this.props.history.push(`items/${item.id}`);
    }

    handleItemClicked = (item) => {
        this.props.history.push(`items/${item.id}/view`);
    }

    handleItemClosed = () => {
        this.props.history.push(`items`);
    }

    render() {
        return (
            <PortfolioItemsList portfolioItems={this.state.portfolioItems}
            onItemClicked={this.handleItemClicked}
            onDeleteItem={this.handleDeleteItem}
            onEditItem={this.handleEditItem} />
        );
    }
}

export default withRouter(PortfolioContainer);