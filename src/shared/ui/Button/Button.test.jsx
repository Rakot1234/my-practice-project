import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
    it('Renders button component', () => {
        const wrapper = shallow(<Button title="Кнопка" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Calls event on click', () => {
        const buttonClick = jest.fn();
        const wrapper = shallow(<Button title="Кнопка" onClick={buttonClick} />);
        wrapper.find('.button').simulate('click');
        expect(buttonClick).toHaveBeenCalled();
    });

    it('Renders as link', () => {
        const wrapper = shallow(<Button title="Кнопка" href="/" />);
        expect(wrapper.find('a')).toBeTruthy();
    });

    it('Renders as button', () => {
        const wrapper = shallow(<Button title="Кнопка" />);
        expect(wrapper.find('button')).toBeTruthy();
    });
});