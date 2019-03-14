import React, { Component } from 'react';
import './BrandsCarousel.scss';
import cx from 'classnames';
import Carousel from '../../ui/ItemsCarousel/ItemsCarousel';
import { CAROUSEL_PARAMS, BRANDS_CAROUSEL } from '../../constants/brands-carousel'

class BrandsCarousel extends Component {
    renderBrands() {
        return (
            BRANDS_CAROUSEL.map((element) => {
                const { id, alt, image, link } = element;

                return (
                    <a href={link} className={cx('brands-carousel__link')} key={id}>
                        <img
                            src={image}
                            alt={alt}
                            className={cx('brands-carousel__image')}
                        />
                    </a>
                );
            })
        );
    }

    render() {
        return (
            <div className={cx('brands-carousel__wrapper')}>
                <Carousel
                    className={cx('brands-carousel')}
                    carouselParams={CAROUSEL_PARAMS}
                >
                    {this.renderBrands()}
                </Carousel>
            </div>
        );
    }
}

export default BrandsCarousel;
