import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
    it('Renders button component', () => {
        const wrapper = shallow(<Button title="Кнопка" />);
        expect(wrapper).toMatchSnapshot();
    });
});