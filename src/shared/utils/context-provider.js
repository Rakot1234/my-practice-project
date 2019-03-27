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
            hitsCarousel: this.fetchHitsCarousel
        };
    }

    fetchMainMenu = () => dataRequest(routes.MAIN_MENU);

    fetchTopMenu = () => dataRequest(routes.TOP_MENU);

    fetchBrandsCarousel = () => dataRequest(routes.BRANDS_CAROUSEL);

    fetchSliderParams = () => dataRequest(routes.SLIDER);

    fetchSpecialsCarousel = () => dataRequest(routes.SPECIALS_CAROUSEL);

    fetchHitsCarousel = () => dataRequest(routes.HITS_CAROUSEL);

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
