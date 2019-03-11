import React, { Component } from 'react';
import './Search.scss';
import cx from 'classnames';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import icons from '../../constants/icons';
import Icon from '../../ui/Icon/Icon';

class Search extends Component {
    render() {
        return (
            <div className={cx('search')}>
                <BlockWrapper innerColor="white" className={cx('search__wrapper')}>
                    1
                </BlockWrapper>
            </div>
        );
    };
};

export default Search;
