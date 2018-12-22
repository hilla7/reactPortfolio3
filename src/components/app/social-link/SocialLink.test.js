import {mount} from 'enzyme';
import React from 'react';
import SocialLink from './SocialLink';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SocialLink renders', () => {
  it('mounts', () => {
    mount(<SocialLink />)
  }) 
})