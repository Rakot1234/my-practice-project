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
        onRemoveItem: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            topPosition: props.bottom,
            leftPosition: props.right
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
        const { storageName, onRemoveItem } = this.props;
        
        onRemoveItem(storageName, itemCode);
    }

    render() {
        const { items } = this.props;
        const { leftPosition, topPosition } = this.state;
        const servicePosition = { top: `${topPosition}px`, left: `${leftPosition}px` };

        return (
            <Portal>
                <div
                    className={cx('services-hint')}
                    style={servicePosition}
                    ref={this.getHintRef}
                >
                    {Object.keys(items).map(key => {
                        const { id, ...itemProps } = items[key];

                        return (
                            <ServicesItem
                                {...itemProps}
                                key={id}
                                onRemoveItem={this.handleRemoveItem}
                            />
                        );
                    })}
                </div>
            </Portal>
        );
    }
};

export default ServicesHint;
