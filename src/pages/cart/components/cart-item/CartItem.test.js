import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItem from './CartItem';
import { mount } from 'enzyme'
import { getInitializedItem } from '../../../../utils/initialized-item';

configure({ adapter: new Adapter() });

describe('CartItem', () => {
    it('CartItem type is "CartItem" ', ()=>{
        const cartItem = <CartItem/>;
        expect(cartItem.type).toBe(CartItem);
    }),
    it('item prop of CartItem is defined', ()=>{
        const item= getInitializedItem();
        const cartItem = <CartItem item={item}/>;
        expect(cartItem.props.item).toBeDefined();
    })
})