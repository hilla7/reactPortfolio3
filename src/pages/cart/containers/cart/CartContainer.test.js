import React from 'react';
import CartContainer from './CartContainer';
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('CartContainer', () => {
  it('Cart has items collection and it is defined', () => {
      const cart = shallow(<CartContainer/>);
      expect(cart.state().items).toBeDefined();
  }) 
})