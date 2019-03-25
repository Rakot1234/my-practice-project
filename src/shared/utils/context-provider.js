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
            specialsCarousel: this.fetchSpecialsCarousel
        };
    }

    fetchMainMenu = () => {
        const { MAIN_MENU } = routes;

        return dataRequest(MAIN_MENU);
    }

    fetchTopMenu = () => {
        const { TOP_MENU } = routes;

        return dataRequest(TOP_MENU);
    }

    fetchBrandsCarousel = () => {
        const { BRANDS_CAROUSEL } = routes;

        return dataRequest(BRANDS_CAROUSEL);
    }

    fetchSliderParams = () => {
        const { SLIDER } = routes;

        return dataRequest(SLIDER);       
    }

    fetchSpecialsCarousel = () => {
        const { SPECIALS_CAROUSEL } = routes;

        return dataRequest(SPECIALS_CAROUSEL);       
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
