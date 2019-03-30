import React from 'react';
import { shallow } from 'enzyme';
import Preloader from './Preloader';

describe('<Preloader />', () => {
    it('Renders preloader component', () => {
        const wrapper = shallow(<Preloader />);
        expect(wrapper).toMatchSnapshot();
    });
});
