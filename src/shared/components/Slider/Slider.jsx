import React, { Component } from 'react';
import './Slider.scss';
import cx from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import Button from '../../ui/Button/Button';
import { CAROUSEL_PARAMS, CAROUSEL_SLIDES } from '../../constants/slider-params';

class Slider extends Component {
    renderSlideContent(slide) {
        const { title, description, link, buttonTitle } = slide;

        return (
            <div className={cx('slider__content')}>
                <div className={cx('slider__title')}>
                    {title}
                </div>
                <div
                    className={cx('slider__description')}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <Button
                    className={cx('slider__button')}
                    href={link}
                    title={buttonTitle}
                    fontColor="black"
                    size="large"
                />
            </div>
        );
    }

    renderSlides() {
        return(
            CAROUSEL_SLIDES.map(slide => {
                const { id, title, image } = slide;

                return(
                    <div className={cx('slider__slide')} key={id}>
                        <img src={image} className={cx('slider__image')} alt={title}/>
                        {this.renderSlideContent(slide)}
                    </div>
                );
            })
        );
    }

    render() {
        return(
            <Carousel {...CAROUSEL_PARAMS}>
                {this.renderSlides()}
            </Carousel>
        );
    }
};

export default Slider;
