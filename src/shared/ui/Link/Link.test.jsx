import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

const props = {
    title: 'Ссылка',
    href: '/'
};

describe('<Link />', () => {
    it('It render Link', () => {
        const wrapper = shallow(<Link {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Calls click handler', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Link {...props} onClick={onClick} />);
        wrapper.find('.link__element').simulate('click');
        expect(onClick).toHaveBeenCalled();
    })
});
