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
        isCustomControls: PropTypes.bool,
        slidesToStop: PropTypes.number,
        carouselParams: PropTypes.object.isRequired,
        view: PropTypes.oneOf(['brands', 'goods'])
    };

    static defaultProps = {
        isCustomControls: false,
        view: "goods"
    };

    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    handleNextClick = () => {
        const { children, slidesToStop } = this.props;
        const { currentSlide } = this.state;
        const isLast = children.length - 1 - currentSlide === slidesToStop;

        if (isLast) {
            return;
        }

        this.setState(({ currentSlide }) => ({ currentSlide: currentSlide + 1 }));
    }

    handlePrevClick = () => {
        this.setState(({ currentSlide }) => ({ currentSlide: currentSlide - 1 }));
    }

    handleSlideChange = index => {
        const { currentSlide } = this.state;

        currentSlide !== index && this.setState({ currentSlide: index });
    }

    renderTitle() {
        return <div className={cx('items-carousel__title')}>{this.props.title}</div>;
    }

    renderControls() {
        const { children, slidesToStop } = this.props;
        const { currentSlide } = this.state;
        const isLast = children.length - 1 - currentSlide === slidesToStop;

        return (
            <div className={cx('items-carousel__conrols')}>
                <div
                    className={cx(
                        'items-carousel__arrow',
                        'items-carousel__arrow-next',
                        { 'items-carousel__arrow-disabled': isLast }
                    )}
                    onClick={this.handleNextClick}
                />
                <div
                    className={cx(
                        'items-carousel__arrow',
                        'items-carousel__arrow-prev',
                        { 'items-carousel__arrow-disabled': !currentSlide }
                    )}
                    onClick={this.handlePrevClick}
                />
            </div>
        );
    }

    render() {
        const {
            title,
            className,
            carouselParams,
            children,
            view,
            isCustomControls
        } = this.props;
        const { currentSlide } = this.state;

        return (
            <div className={cx(
                'items-carousel__wrapper',
                className,
                `items-carousel__wrapper_view-${view}`
            )}
            >
                {title && this.renderTitle()}
                {isCustomControls && this.renderControls()}
                <Carousel
                    {...carouselParams}
                    selectedItem={currentSlide}
                    onChange={this.handleSlideChange}
                    className={cx('items-carousel')}
                >
                    {children}
                </Carousel>
            </div>
        );
    }
};

export default ItemsCarousel;
