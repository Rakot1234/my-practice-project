import React, { Component } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Input extends Component {
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        isRequired: PropTypes.bool,
        value: PropTypes.string,
        type: PropTypes.oneOf([
            'checkbox',
            'email',
            'radio',
            'search',
            'submit',
            'text',
            'tel'
        ]),
        onChange: PropTypes.func
    };

    static defaultProps = {
        placeholder: '',
        type: 'text',
        value: ''
    };

    render() {
        const {
            placeholder,
            className,
            type,
            isRequired,
            title,
            name,
            value,
            onChange
        } = this.props;

        return (
            <label className={cx('input')}>
                {title && <span className={cx('input__title')}>{title}</span>}
                <input
                    type={type}
                    className={cx('input__input', className)}
                    placeholder={placeholder}
                    required={isRequired}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        );
    }
};

export default Input;
