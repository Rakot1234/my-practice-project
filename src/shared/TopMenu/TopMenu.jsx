import React, { Component } from 'react';
import './TopMenu';
import PropTypes from 'prop-types';

class TopMenu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(
            PropTypes.objectOf(
                PropTypes.string
            )
        )
    };

    render() {
        const { menu = [] } = this.props;

        return (
            <ul className="top-menu">
                {menu.map((element, index) => {
                    const { title, link } = element;
                    return (
                        <li className="top-menu__element" key={index + element}>
                            <a href={link} className="top-menu__link">
                                {title}
                            </a> 
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default TopMenu;
