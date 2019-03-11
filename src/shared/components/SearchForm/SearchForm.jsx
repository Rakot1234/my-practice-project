import React, { Component } from 'react';
import './SearchForm.scss';
import cx from 'classnames';
import Input from '../../ui/Input/Input';

class SearchForm extends Component {
    render() {
        return (
            <form className={cx('search-form')} name="search">
                <Input type="search" className={cx('search-form__input')} />
                <Input type="submit" className={cx('search-form__submit')} />
            </form>
        );
    }
}

export default SearchForm;
