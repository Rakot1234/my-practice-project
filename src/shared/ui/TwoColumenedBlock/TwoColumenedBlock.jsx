import React, { Component } from 'react';
import './TwoColumenedBlock.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

class TwoColumenedBlock extends Component {
    static propTypes = {
        left: PropTypes.node,
        right: PropTypes.node
    };

    render() {
        const { left, right } = this.props;

        return (
            <div className={cx('two-columened-block')}>
                <div className={cx('two-columened-block__left')}>
                    {left}
                </div>
                <div className={cx('two-columened-block__right')}>
                    {right}
                </div>
            </div>
        );
    }
}

export default TwoColumenedBlock;
