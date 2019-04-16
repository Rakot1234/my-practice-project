import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataRequest from './api';
import routes from '../constants/routes';

const ProjectContext = React.createContext({});

class ApiProvider extends Component {
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
            storageAdd: this.handleStorageAdd,
            storageRemove: this.handleStorageRemove,
            waitingList: localStorage.waitingList ? JSON.parse(localStorage.waitingList) : {},
            compareList: localStorage.compareList ? JSON.parse(localStorage.compareList) : {},
            cart: localStorage.cart ? JSON.parse(localStorage.cart) : {}
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

    handleStorageAdd = (storage, key, item) => {
        this.setState(({ [storage]: storageList }) => {
            const updatedList = {...storageList, [key]: item };

            localStorage.setItem(storage, JSON.stringify(updatedList));

            return { [storage]: updatedList };
        });
    };

    handleStorageRemove = (storage, key) => {
        this.setState(({ [storage]: storageList }) => {
            const {[key]: value, ...updatedList} = storageList;

            localStorage.setItem(storage, JSON.stringify(updatedList));

            return { [storage]: updatedList };
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

export const ApiConsumer = ProjectContext.Consumer;
export default ApiProvider;
