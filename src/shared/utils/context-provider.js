import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataRequest from './api';
import routes from '../constants/routes';

const ProjectContext = React.createContext({});

class ContextProvider extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    constructor(props) {
        super(props);

        this.state = {
            mainMenu: this.fetchMainMenu,
            topMenu: this.fetchTopMenu,
            brandsCarousel: this.fetchBrandsCarousel,
            sliderParams: this.fetchSliderParams,
            specialsCarousel: this.fetchSpecialsCarousel,
            hitsCarousel: this.fetchHitsCarousel,
            mainYmap: this.fetchMainYmap,
            footerMenu: this.fetchFooterMenu,
            waitingList: {},
            waitingAdd: this.handleWaitingAdd,
            waitingRemove: this.handleWaitingRemove,
            compareList: {},
            compareAdd: this.handleCompareAdd,
            compareRemove: this.handleCompareRemove,
            cart: {},
            cartAdd: this.handleCartAdd,
            cartRemove: this.handleCartRemove
        };
    }

    fetchMainMenu = () => dataRequest(routes.MAIN_MENU);

    fetchTopMenu = () => dataRequest(routes.TOP_MENU);

    fetchBrandsCarousel = () => dataRequest(routes.BRANDS_CAROUSEL);

    fetchSliderParams = () => dataRequest(routes.SLIDER);

    fetchSpecialsCarousel = () => dataRequest(routes.SPECIALS_CAROUSEL);

    fetchHitsCarousel = () => dataRequest(routes.HITS_CAROUSEL);

    fetchMainYmap = () => dataRequest(routes.MAIN_YMAP);

    fetchFooterMenu = () => dataRequest(routes.FOOTER_MENU);

    handleWaitingAdd = (key, item) => {
        this.setState(({ waitingList }) => {
            waitingList[key] = item;

            return { waitingList };
        });
    };

    handleWaitingRemove = key => {
        this.setState(({ waitingList }) => {
            delete waitingList[key];

            return { waitingList };
        }); 
    }

    handleCompareAdd = (key, item) => {
        this.setState(({ compareList }) => {
            compareList[key] = item;

            return { compareList };
        });
    };

    handleCompareRemove = key => {
        this.setState(({ compareList }) => {
            delete compareList[key];

            return { compareList };
        }); 
    }

    handleCartAdd = (key, item) => {
        this.setState(({ cart }) => {
            cart[key] = item;

            return { cart };
        });
    };

    handleCartRemove = key => {
        this.setState(({ cart }) => {
            delete cart[key];

            return { cart };
        }); 
    }

    render() {
        return (
            <ProjectContext.Provider value={this.state}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
};

export const ContextConsumer = ProjectContext.Consumer;
export default ContextProvider;
