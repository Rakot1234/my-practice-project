import React, { Component } from 'react';
import './TopMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';
import Preloader from '../../ui/Preloader/Preloader';

class TopMenu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(
            PropTypes.objectOf(
                PropTypes.string
            )
        ),
        isFetching: PropTypes.bool
    };
    
    renderMenu() {
        const { menu = [] } = this.props;

        return (
            menu.map((element, index) => {
                const { title, link } = element;
                return (
                    <li className={cx('top-menu__element')} key={index + element}>
                        <Link
                            href={link}
                            className={cx('top-menu__link')}
                            hoverColor="sandy"
                            title={title}
                        />
                    </li>
                );
            })
        );
    }

    render() {
        const { isFetching } = this.props;

        return (
            <ul className={cx('top-menu')}>
                {isFetching && <Preloader size="small" />}
                {!isFetching && this.renderMenu()}
            </ul>
        );
    }
};

export default TopMenu;
