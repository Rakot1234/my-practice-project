import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('<Icon />', () => {
    it('Renders icon component', () => {
        const wrapper = shallow(<Icon icon="some-icon.png" />);
        expect(wrapper).toMatchSnapshot();
    });
});