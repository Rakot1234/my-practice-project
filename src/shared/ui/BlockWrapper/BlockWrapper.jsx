import React, { PureComponent } from 'react';
import './BlockWrapper.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class BlockWrapper extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        bottomBorder: PropTypes.bool,
        children: PropTypes.node,
        innerColor: PropTypes.oneOf(['transparent', 'white', 'gray', 'black']),
    };

    static defaultProps = {
        className: '',
        bottomBorder: false,
        innerColor: 'transparent'
    };

    render() {
        const { children, className, bottomBorder, innerColor } = this.props;
        const wrapperClasses = [
                'block-wrapper', 
                `block-wrapper_bottom-border_${bottomBorder}`,
                `block-wrapper_inner-color_${innerColor}`
        ];

        return (
            <div className={cx(...wrapperClasses)}>
                <div className={cx('block-wrapper__inner', className)}>
                    {children}
                </div>
            </div>
        );
    }
};

export default BlockWrapper;
