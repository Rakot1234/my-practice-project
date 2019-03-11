import React, { Component } from 'react';
import './Search.scss';
import cx from 'classnames';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import SearchForm from '../../components/SearchForm/SearchForm';
import ShopServices from '../../components/ShopServices/ShopServices';

class Search extends Component {
    render() {
        return (
            <div className={cx('search')}>
                <BlockWrapper innerColor="white" className={cx('search__wrapper')}>
                    <SearchForm />
                    <ShopServices />
                </BlockWrapper>
            </div>
        );
    };
};

export default Search;
