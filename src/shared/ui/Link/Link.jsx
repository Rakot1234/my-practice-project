import React, { PureComponent } from 'react';
import './Link.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Link extends PureComponent {
    static propTypes = {
        href: PropTypes.string.isRequired,
        className: PropTypes.string,
        wrapperClass: PropTypes.string,
        hoverColor: PropTypes.oneOf(['yellow', 'sandy']),
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        className: '',
        hoverColor: 'yellow'
    };

    render() {
        const {
            href,
            className,
            wrapperClass,
            hoverColor,
            onClick,
            title
        } = this.props;

        return (
            <span className={cx('link', wrapperClass)}>
                <a
                    href={href} 
                    className={cx('link__element', className, `link__element-${hoverColor}`)}
                    onClick={onClick}
                >
                    {title}
                </a>
            </span>
        ); 
    }
};

export default Link;
