import React, { Component } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Input extends Component {
    render() {
        return (
            <label className={cx('input')}>
                <span className={cx('input__title')}></span>
                <input type="" className={cx('input__input')} placeholder="" />
            </label>
        );
    }
};

export default Input;
