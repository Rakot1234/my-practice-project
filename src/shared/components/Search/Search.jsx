import React, { Component } from 'react';
import './Search.scss';
import cx from 'classnames';
import SearchForm from '../../components/SearchForm/SearchForm';
import ShopServices from '../../components/ShopServices/ShopServices';

class Search extends Component {
    render() {
        return (
            <div className={cx('search')}>
                <SearchForm />
                <ShopServices />
            </div>
        );
    };
};

export default Search;
