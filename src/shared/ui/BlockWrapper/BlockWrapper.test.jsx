import React from 'react';
import { shallow } from 'enzyme';
import BlockWrapper from './BlockWrapper';

describe('<BlockWrapper />', () => {
    it('Should render blockwrapper', () => {
        const wrapper = shallow(<BlockWrapper><div /></BlockWrapper>);
        expect(wrapper).toMatchSnapshot();
    });
});
