import React, { Component } from 'react';
import './BrandsCarousel.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Carousel from '../../ui/ItemsCarousel/ItemsCarousel';
import Preloader from '../../ui/Preloader/Preloader';
import { convertImage } from '../../utils/imageConvert';

class BrandsCarousel extends Component {
    static propTypes = {
        fetchCarousel: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isFetching: true,
            items: [],
            carouselParams: {}
        };
    }

    componentDidMount() {
        this.fetchCarousel();
    }

    fetchCarousel = async () => {
        const { fetchCarousel } = this.props; 
        const carousel = await fetchCarousel();

        this.setState({
            items: carousel.items,
            carouselParams: carousel.carouselParams,
            isFetching: false
        });
    }

    renderBrands() {
        const { items = [] } = this.state;

        return (
            items.map((element) => {
                const { id, alt, image, link } = element;

                return (
                    <a href={link} className={cx('brands-carousel__link')} key={id}>
                        <img
                            src={convertImage(image)}
                            alt={alt}
                            className={cx('brands-carousel__image')}
                        />
                    </a>
                );
            })
        );
    }

    render() {
        const { carouselParams, isFetching } = this.state;

        return (
            <div className={cx('brands-carousel__wrapper')}>
                {isFetching && <Preloader size="small" />}
                {!isFetching && 
                    <Carousel
                        className={cx('brands-carousel')}
                        carouselParams={carouselParams}
                        isCustomControls
                        slidesToStop={3}
                    >
                        {this.renderBrands()}
                    </Carousel>
                }
            </div>
        );
    }
}

export default BrandsCarousel;
