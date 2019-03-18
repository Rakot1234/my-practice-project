import React, { Component } from 'react';
import './Slider.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import Button from '../../ui/Button/Button';
import Preloader from '../../ui/Preloader/Preloader';
import images from '../../constants/images';

class Slider extends Component {
    static defaultProps = {
        fetchSlider: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            sliderParams: {},
            slides: [],
            isFetching: true
        };
    };

    componentDidMount() {
        this.fetchSlider();
    }

    fetchSlider = async () => {
        const { fetchSlider } = this.props;
        const slider = await fetchSlider();

        this.setState({
            sliderParams: slider.sliderParams,
            slides: slider.slides,
            isFetching: false
        });
    }

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
        const { slides = [] } = this.state;

        return(
            slides.map(slide => {
                const { id, title } = slide;

                return(
                    <div className={cx('slider__slide')} key={id}>
                        <img src={images.SLIDE} className={cx('slider__image')} alt={title}/>
                        {this.renderSlideContent(slide)}
                    </div>
                );
            })
        );
    }

    render() {
        const { sliderParams, isFetching } = this.state;

        return(
            <>
                {!isFetching &&
                    <div className={cx('slider')}>
                        <Carousel {...sliderParams}>
                            {this.renderSlides()}
                        </Carousel>
                    </div>
                }
                {isFetching && <Preloader size="large"/>}
            </>
        );
    }
};

export default Slider;
