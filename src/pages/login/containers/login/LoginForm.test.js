import React from 'react';
import { shallow, mount } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './LoginForm';
import { MemoryRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('LoginForm', () => {
    it('isWrongCredentials state inititilized to false', () => {
        const login = mount(shallow(<Router>
            <LoginForm />
        </Router>).get(0))
        expect(login.state().isWrongCredentials).toBeFalsy();
    })
})