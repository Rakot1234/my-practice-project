import React, { PureComponent } from 'react';
import './GoodsCarousel.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ItemsCarousel from '../../ui/ItemsCarousel/ItemsCarousel';
import ProductTile from '../../ui/ProductTile/ProductTile';

class GoodsCarousel extends PureComponent {
    static propTypes = {
        fetchGoodsCarousel: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            carouselParams: {},
            carouselItems: [],
            isFetching: true
        }
    }

    componentDidMount() {
        this.fetchCarousel();
    }

    fetchCarousel = async () => {
        const { fetchGoodsCarousel } = this.props;
        const carouselData = await fetchGoodsCarousel();

        this.setState({
            carouselParams: carouselData.carouselParams,
            carouselItems: carouselData.items,
            isFetching: false
        });
    }

    renderTiles() {
        const { carouselItems } = this.state;

        return carouselItems.map(tile => ( <ProductTile { ...tile} key={tile.id} />));
    }

    render() {
        const { carouselParams, isFetching } = this.state;

        return (
            <div className={cx('goods-carousel__wrapper')}>
                {!isFetching &&
                    <ItemsCarousel
                        title="Спецпредложения"
                        isCustomControls
                        slidesToStop={3}
                        carouselParams={carouselParams}
                        view="goods"
                        dotsNotShown={3}
                    >
                        {this.renderTiles()}
                    </ItemsCarousel>
                }
            </div>
        );
    }
};

export default GoodsCarousel;
