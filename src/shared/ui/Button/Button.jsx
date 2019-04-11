import React, { PureComponent } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';

class Button extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string,
        href: PropTypes.string,
        icon: PropTypes.string,
        isDisabled: PropTypes.bool,
        type: PropTypes.oneOf(['button', 'reset', 'submit']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        color: PropTypes.oneOf(['yellow', 'red', 'gray', 'black']),
        hoverColor: PropTypes.oneOf(['black', 'sandy']),
        fontSize: PropTypes.oneOf(['medium', 'large']),
        fontColor: PropTypes.oneOf(['white', 'black']),
        fontWeight: PropTypes.oneOf(['normal', '500', '600', 'bold']),
        onClick: PropTypes.func
    };

    static defaultProps = {
        type: 'button',
        size: 'medium',
        color: 'yellow',
        hoverColor: 'black',
        fontSize: 'medium',
        fontColor: 'white',
        fontWeight: 'normal',
        className: ''
    };

    renderButton() {
        const {
            title,
            icon,
            type,
            size,
            color,
            hoverColor,
            onClick,
            fontSize,
            fontColor,
            fontWeight,
            isDisabled
        } = this.props;
        const wrapperClasses = [
            'button',
            `button_color_${color}`, 
            `button_hover-color_${hoverColor}`,
            `button_size_${size}`,
            `button_font-size_${fontSize}`,
            `button_font-color_${fontColor}`,
            `button_font-weight_${fontWeight}`
        ];

        return (
            <button
                className={cx(...wrapperClasses)}
                onClick={onClick}
                type={type}
                disabled={isDisabled}
            >
                {icon && <Icon icon={icon} className={cx('button__icon')} />}
                <span className={cx('button__title')}>{title}</span>
            </button>
        );
    }

    render() {
        const {
            title,
            icon,
            type,
            size,
            color,
            hoverColor,
            onClick,
            fontSize,
            fontColor,
            fontWeight,
            isDisabled,
            className,
            href
        } = this.props;
        const wrapperClasses = [
            'button',
            `button_color_${color}`, 
            `button_hover-color_${hoverColor}`,
            `button_size_${size}`,
            `button_font-size_${fontSize}`,
            `button_font-color_${fontColor}`,
            `button_font-weight_${fontWeight}`
        ];
        const ElementType = href ? 'a' : 'button';

        return (
            <div className={cx('button__wrapper', { 'button__wrapper_disabled': isDisabled }, className)}>
                <ElementType
                    className={cx(...wrapperClasses)}
                    onClick={onClick}
                    type={type}
                    disabled={isDisabled}
                    href={href}
                >
                    {icon && <Icon icon={icon} className={cx('button__icon')} />}
                    <span className={cx('button__title')}>{title}</span>
                </ElementType>
            </div>
        );
    }
};

export default Button;
