import React, { Component } from 'react';
import './PageTemplate.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import PageFooter from '../../components/PageFooter/PageFooter';
import Popup from '../../ui/Popup/Popup';
import CallbackForm from '../../components/CallbackForm/CallbackForm';
import Contacts from '../../components/Contacts/Contacts';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import Search from '../../components/Search/Search';
import Slider from '../../components/HeadSlider/HeadSlider';
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel';
import MainMenu from '../../components/MainMenu/MainMenu';
import PageHeader from '../../components/PageHeader/PageHeader';
import { ApiConsumer } from '../../utils/context-provider';
import { isMainPage } from '../../utils/misc-functions';

const IS_MAIN = isMainPage();

class PageTemplate extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor(props) {
		super(props)

		this.state = {
			isPopupOpened: false,
		}
    }

    handlePopupShow = () => this.setState(({ isPopupOpened }) => ({ isPopupOpened: !isPopupOpened }))
    
    renderPageHeader(api) {
		return (
			<>
				<PageHeader handleFetchMenu={api.topMenu} />
				<Contacts onDescriptionClick={this.handlePopupShow} />
				<BlockWrapper
					innerColor="white"
					className={cx('page-template__header-wrapper')}
					bottomBorder={true}
				>
					<div className={cx('page-template__header-left')}>
						<MainMenu handleFetchMenu={api.mainMenu} isHidden={!IS_MAIN} />
					</div>
					<div className={cx('page-template__header-right')}>
						<Search />
						{IS_MAIN && <Slider handleFetchSlider={api.sliderParams} />}
						{IS_MAIN && <BrandsCarousel handleFetchCarousel={api.brandsCarousel} />}
					</div>
				</BlockWrapper>
			</>
		)
	}

    render() {
        return (
            <ApiConsumer>
				{api => (
                    <div className={cx('page-template')}>
                        {this.renderPageHeader(api)}
                        <div className={cx('page-template__content')}>
                            {this.props.children}
                        </div>
                        <PageFooter
                            handleFetchMenu={api.footerMenu} 
                            onDescriptionClick={this.handlePopupShow}
                        />
                        {this.state.isPopupOpened &&
                            <Popup handleClose={this.handlePopupShow}>
                                <CallbackForm />
                            </Popup>
                        }
                    </div>
                )}
            </ApiConsumer>
        );
    }
}

export default PageTemplate;
