import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    }

    render() {
        const { icon, className } = this.props;

        return (
            <div className={`icon ${className && className}`}>
                <img
                    src={icon}
                    alt=""
                    className="icon__image"
                />
            </div>
        );
    }
};

export default Icon;
