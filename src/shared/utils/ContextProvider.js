import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataRequest from './api';
import routes from '../../shared/constants/routes';

const ProjectContext = React.createContext({});

class ContextProvider extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor(props) {
        super(props);

        this.state = ({
            mainMenu: this.fetchMainMenu,
            topMenu: this.fetchTopMenu,
            brandsCarousel: this.fetchBrandsCarousel,
            sliderParams: this.fetchSliderParams
        });
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
