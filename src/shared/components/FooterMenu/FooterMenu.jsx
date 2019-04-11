import React, { PureComponent } from 'react';
import './FooterMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';

class FooterMenu extends PureComponent {
    static propTypes = {
        header: PropTypes.string,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                href: PropTypes.string
            })
        )
    };

    render() {
        const { header, menu } = this.props;

        return (
            <div className={cx('footer-menu')}>
                <div className={cx('footer-menu__title')}>{header}</div>
                <ul className={cx('footer-menu__list')}>
                    {menu.map((element, index) => {
                        const { id, title, href } = element;

                        return (
                            <li className={cx('footer-menu__element')} key={index + id}>
                                <Link
                                    className={cx('footer-menu__link')}
                                    title={title}
                                    href={href}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
};

export default FooterMenu;
