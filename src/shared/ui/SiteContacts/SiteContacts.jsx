import React, { PureComponent } from 'react';
import './SiteContacts.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';
import Link from '../../ui/Link/Link';
import Phone from '../../ui/Phone/Phone';
import icons from '../../constants/icons';

class SiteContacts extends PureComponent {
    static propTypes = {
        onDescriptionClick: PropTypes.func,
        view: PropTypes.oneOf(['header', 'footer'])
    }

    static defaultProps = {
        view: 'header'
    }

    renderSocials() {
		return (
			<div className={cx('site-contacts__socials')}>
				<div className={cx('site-contacts__socials-wrapper')}>
					<Icon
						icon={icons.SKYPE}
						className={cx('site-contacts__socials-icon')}
					/>
					<Link
						href="#"
						title="Skype"
						className={cx('site-contacts__socials-link')}
					/>
				</div>
				<div className={cx('site-contacts__socials-wrapper')}>
					<Icon
						icon={icons.EMAIL}
						className={cx('site-contacts__socials-icon')}
					/>
					<Link
						href="#"
						title="info@pogos.ru"
						className={cx('site-contacts__socials-link')}
					/>
				</div>
			</div>
		)
    }
    
    render() {
        const { view } = this.props;

        return (
            <div className={cx('site-contacts', `site-contacts_view_${view}`)}>
                <Phone
					phone="8 800 77 00 155"
					description="Звонок по России бесплатный"
                    className={cx('site-contacts__phone')}
                    view={view}
				/>
				<Phone
					phone="+7 (391) 2 88 88 75"
					description="Заказать обратный звонок"
					className={cx('site-contacts__phone')}
                    onClickDescription={this.props.onDescriptionClick}
                    view={view}
				/>
				{this.renderSocials()}
            </div>
        );
    }
};

export default SiteContacts;
