import React, { Component } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputMask from 'react-input-mask';

class Input extends Component {
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        mask: PropTypes.string,
        isRequired: PropTypes.bool,
        isDisabled: PropTypes.bool,
        value: PropTypes.string,
        itemsJustify: PropTypes.oneOf([
            'space-around',
            'space-between',
            'start',
            'end',
            'center'
        ]),
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
        isDisabled: false,
        placeholder: '',
        type: 'text',
        value: '',
        itemsJustify: 'start'
    };

    render() {
        const {
            placeholder,
            className,
            type,
            isRequired,
            isDisabled,
            title,
            name,
            value,
            onChange,
            mask,
            itemsJustify
        } = this.props;

        return (
            <label className={cx('input', `input_justify_${itemsJustify}`)}>
                {title && <span className={cx('input__title')}>{title}</span>}
                <InputMask
                    type={type}
                    className={cx('input__input', className)}
                    placeholder={placeholder}
                    required={isRequired}
                    name={name}
                    value={value}
                    onChange={onChange}
                    readOnly={!onChange}
                    disabled={isDisabled}
                    mask={mask}
                />
            </label>
        );
    }
};

export default Input;
