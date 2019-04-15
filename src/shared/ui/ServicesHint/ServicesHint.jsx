import React, { Component } from 'react';
import './ServicesHint.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Portal from '../../utils/portal';
import ServicesItem from './ServicesItem';

class ServicesHint extends Component {
    static propTypes = {
        storageName: PropTypes.string,
        items: PropTypes.object,
        bottom: PropTypes.number,
        right: PropTypes.number, 
        removeItem: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            topPosition: this.props.bottom,
            leftPosition: this.props.right
        }
    }

    componentDidMount() {
        this.setState(({ leftPosition, topPosition }) => ({
            topPosition: topPosition + window.pageYOffset,
            leftPosition: leftPosition - this.hint.offsetWidth
        }))
    }

    getHintRef = hint => this.hint = hint;

    handleRemoveItem = itemCode => {
        const { storageName, removeItem } = this.props;
        
        removeItem(storageName, itemCode);
    }

    render() {
        const { items } = this.props;
        const { leftPosition, topPosition } = this.state;

        return (
            <Portal>
                <div
                    className={cx('services-hint')}
                    style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
                    ref={this.getHintRef}
                >
                    {Object.keys(items).map(key => {
                        const { id, ...itemProps } = items[key];

                        return <ServicesItem
                            {...itemProps}
                            key={id}
                            handleRemoveItem={this.handleRemoveItem}
                        />;
                    })}
                </div>
            </Portal>
        );
    }
};

export default ServicesHint;
