import React, { PureComponent } from 'react';
import './GoodsCarousel.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ItemsCarousel from '../../ui/ItemsCarousel/ItemsCarousel';
import ProductTile from '../../ui/ProductTile/ProductTile';
import { ApiConsumer } from '../../utils/context-provider';

class GoodsCarousel extends PureComponent {
    static propTypes = {
        handleFetchGoodsCarousel: PropTypes.func
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
        this.handleFetchCarousel();
    }

    handleFetchCarousel = async () => {
        const { handleFetchGoodsCarousel } = this.props;
        const carouselData = await handleFetchGoodsCarousel();

        this.setState({
            carouselParams: carouselData.carouselParams,
            carouselItems: carouselData.items,
            isFetching: false
        });
    }

    renderTiles(storage) {
        const { carouselItems } = this.state;

        return carouselItems.map(tile => (<ProductTile { ...tile} key={tile.id} storage={storage}/>));
    }

    render() {
        const { carouselParams, isFetching } = this.state;

        return (
            <ApiConsumer>
                {storage => (
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
                                {this.renderTiles(storage)}
                            </ItemsCarousel>
                        }
                    </div>
                )}
            </ApiConsumer>
        );
    }
};

export default GoodsCarousel;
