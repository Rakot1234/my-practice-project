import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
    it('Renders input component', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Shoud be changed', () => {
        const onChange = jest.fn();
        const wrapper = shallow(<Input onChange={onChange} />);
        wrapper.find('.input__input').simulate('change');
        expect(onChange.mock.calls).toHaveLength(1);
    });
});