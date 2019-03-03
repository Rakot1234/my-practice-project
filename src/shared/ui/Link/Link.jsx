import React, { PureComponent } from 'react';
import './Link.scss';
import PropTypes from 'prop-types';

class Link extends PureComponent {
    static propTypes = {
        href: PropTypes.string.isRequired,
        className: PropTypes.string,
        hoverColor: PropTypes.oneOf(['yellow', 'sandy']),
        onClick: PropTypes.func,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        className: '',
        hoverColor: 'yellow'
    };

    render() {
        const {
            href,
            className,
            hoverColor,
            onClick,
            title
        } = this.props;

        return (
            <span className={`link`}>
                <a
                    href={href} 
                    className={`link__element ${className} link__element-${hoverColor}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </span>
        ); 
    }
};

export default Link;
