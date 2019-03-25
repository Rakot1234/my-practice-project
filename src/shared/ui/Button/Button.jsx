import React, { PureComponent } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';
import Icon from '../../ui/Icon/Icon';

class Button extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string,
        href: PropTypes.string,
        icon: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        color: PropTypes.oneOf(['yellow', 'red', 'gray']),
        hoverColor: PropTypes.oneOf(['black', 'sandy']),
        fontSize: PropTypes.oneOf(['medium', 'large']),
        fontColor: PropTypes.oneOf(['white', 'black']),
        onClick: PropTypes.func
    };

    static defaultProps = {
        size: 'medium',
        color: 'yellow',
        hoverColor: 'black',
        fontSize: 'medium',
        fontColor: 'white',
        className: ''
    };

    render() {
        const {
            title,
            className,
            href,
            icon,
            size,
            color,
            hoverColor,
            onClick,
            fontSize,
            fontColor
        } = this.props;
        const wrapperClasses = [
            'button', 
            className, 
            `button__color_${color}`, 
            `button__hover-color_${hoverColor}`,
            `button__size_${size}`,
            `button__font-size_${fontSize}`,
            `button__font-color_${fontColor}`
        ];

        return (
            <div
                className={cx(...wrapperClasses)}
                onClick={onClick}
            >
                {icon && <Icon icon={icon} className={cx('button__icon')} />}
                {!href && title}
                {href &&
                    <Link href={href} title={title} className={cx('button__link')} />
                }
            </div>
        );
    }
};

export default Button;
