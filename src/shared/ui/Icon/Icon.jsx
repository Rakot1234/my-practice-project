import React, { PureComponent } from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Icon extends PureComponent {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: ''
    }

    render() {
        const { icon, className, onClick } = this.props;

        return (
            <div className={cx('icon', className)}>
                <img
                    src={icon}
                    alt=""
                    className={cx('icon__image')}
                    onClick={onClick}
                />
            </div>
        );
    }
};

export default Icon;
