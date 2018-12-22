import React from 'react';
import './Main.css';
import HomePage from '../../../pages/home/HomePage';
import AboutPage from '../../../pages/about/AboutPage';
import CartPage from '../../../pages/cart/CartPage';
import LoginPage from '../../../pages/login/LoginPage';
import PortfolioItemPage from '../../../pages/portfolio-item/PortfolioItemPage';
import PortfolioItemsPage from '../../../pages/portfolio-items/PortfolioItemsPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import PortfolioItemViewPage from '../../../pages/portfolio-item-view/PortfolioItemViewPage';
import PrivateRoute from '../../core/private-route/PrivateRoute';
import RouteTransition from '../../../layouts/route-transition/RouteTransition';

const Main = () => (
    <div className="main">
        <RouteTransition>
            <Switch >
                <Route exact component={() => <Redirect to="/home" />} path="/" />
                <Route component={HomePage} path="/home" />
                <Route component={AboutPage} path="/about" />
                <Route component={LoginPage} path="/login" />
                <Route component={PortfolioItemViewPage} path="/items/:id/view" />
                <Route component={PortfolioItemPage} path="/items/:id" />
                <Route component={PortfolioItemsPage} path="/items" />
                <PrivateRoute component={CartPage} path="/cart" />
            </Switch>
        </RouteTransition>
    </div>
);

export default Main;