import React, { Component } from 'react';
import './TopMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';

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
            <ul className={cx('top-menu')}>
                {menu.map((element, index) => {
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
                })}
            </ul>
        );
    }
};

export default TopMenu;
