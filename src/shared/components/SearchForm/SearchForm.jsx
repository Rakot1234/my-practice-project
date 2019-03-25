import React, { Component } from 'react';
import './SearchForm.scss';
import cx from 'classnames';
import Input from '../../ui/Input/Input';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleInputValue = e => {
        this.setState({ value: e.target.value });
    }

    render() {
        const { value } = this.state;

        return (
            <form className={cx('search-form')} name="search">
                <Input
                    type="search"
                    className={cx('search-form__input')}
                    placeholder="Поиск по сайту"
                    onChange={this.handleInputValue}
                    value={value}
                />
                <Input type="submit" className={cx('search-form__submit')} />
            </form>
        );
    }
}

export default SearchForm;
