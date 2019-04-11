import React, { Component } from 'react';
import './PageFooter.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import Preloader from '../../ui/Preloader/Preloader';
import Icon from '../../ui/Icon/Icon';
import Contacts from '../../ui/SiteContacts/SiteContacts'
import { PAYMENT, SOCIALS } from './data';

class PageFooter extends Component {
    static propsTypes = {
        handleFetchMenu: PropTypes.func,
        onDescriptionClick: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            menusList: [],
            isFetching: true
        }
    }

    componentDidMount() {
        this.handleFetchMenu();
    }

    handleFetchMenu = async () => {
        const menusList = await this.props.handleFetchMenu();

        this.setState({
            menusList,
            isFetching: false
        });
    }
    
    renderPayment() {
        return (
            <div className={cx('page-footer__payment')}>
                {PAYMENT.map((card, index) => {
                    const { id, alt, image } = card;

                    return (
                        <div className={cx('page-footer__card')} key={index + id}>
                            <img src={image} alt={alt} />
                        </div>
                    );
                })}
            </div>
        );
    }

    renderMenu() {
        const { menusList } = this.state;

        return (
            <div className={cx('page-footer__menu')}>
                <div className={cx('page-footer__menu-wrapper')}>
                    {menusList.map((menu, index) => {
                        const { id, ...menuProps } = menu;

                        return <FooterMenu {...menuProps} key={index + id} />;
                    })}
                </div>
                {this.renderPayment()}
            </div>
        );
    }

    renderSocials() {
        return (
            <div className={cx('page-footer__socials')}>
                <div className={cx('page-footer__socials-title')}>
                    Pogos в соц. сетях
                </div>
                <div className={cx('page-footer__socials-wrapper')}>
                    {SOCIALS.map((soc, index) => {
                        const { id, img } = soc;

                        return (
                            <div className={cx('page-footer__socials-icon-wrapper')} key={index + id}>
                                <Icon className={cx('page-footer__socials-icon')} icon={img} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    render() {
        const { isFetching } = this.state;
        const { onDescriptionClick } = this.props;

        return (
            <div className={cx('page-footer')}>
                <BlockWrapper innerColor="black">
                    <div className={cx('page-footer__wrapper')}>
                        {isFetching ? <Preloader /> : this.renderMenu()}
                        {this.renderSocials()}
                        <Contacts onDescriptionClick={onDescriptionClick} view="footer" />
                    </div>
                </BlockWrapper>
            </div>
        );
    }
};

export default PageFooter;
