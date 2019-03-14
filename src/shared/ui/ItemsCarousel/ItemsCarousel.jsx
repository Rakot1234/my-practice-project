import React, { Component } from 'react';
import './ItemsCarousel.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Carousel } from 'react-responsive-carousel';

class ItemsCarousel extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        children: PropTypes.node,
        carouselParams: PropTypes.object.isRequired
    };

    render() {
        const { title, className, carouselParams, children } = this.props;

        return(
            <div className={cx('carousel__wrapper', className)}>
                {title && 
                    <div className={cx('carousel__title')}>
                        {title}
                    </div>
                }
                <Carousel {...carouselParams} className={cx('carousel')}>
                    {children}
                </Carousel>
            </div>
        );
    }
};

export default ItemsCarousel;
