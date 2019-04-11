import React from 'react';
import { shallow } from 'enzyme';
import TwoColumenedBlock from './TwoColumenedBlock';

describe('<TwoColumenedBlock />', () => {
    it('Should render component', () => {
        const wrapper = shallow(<TwoColumenedBlock />);
        expect(wrapper).toMatchSnapshot();
    });
});
