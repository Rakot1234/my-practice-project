import React, { PureComponent } from 'react';
import './BlockWrapper.scss';
import PropTypes from 'prop-types';

class BlockWrapper extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        bottomBorder: PropTypes.bool,
        children: PropTypes.node,
        innerColor: PropTypes.oneOf(['transparent', 'white', 'gray']),
    };

    static defaultProps = {
        className: '',
        bottomBorder: false,
        innerColor: 'transparent'
    };

    render() {
        const { children, className, bottomBorder, innerColor } = this.props;

        return (
            <div className={
                    `block-wrapper 
                    block-wrapper_bottom-border_${bottomBorder} 
                    block-wrapper_inner-color_${innerColor}`
                }
            >
                <div className={`block-wrapper__inner ${className}`}>
                    {children}
                </div>
            </div>
        );
    }
};

export default BlockWrapper;
