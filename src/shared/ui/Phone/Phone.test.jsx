import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';

describe('<Phone />', () => {
    it('Render phone field', () => {
        const wrapper = shallow(<Phone phone="8-111-11-11" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Initiate event on click', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Phone phone="8-111-11-11" onClickDescription={onClick} />);
        wrapper.find('.phone__description').simulate('click');
        expect(onClick.mock.calls).toHaveLength(1);
    });
});
