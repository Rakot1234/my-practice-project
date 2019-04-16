import React, { Component } from 'react'
import cx from 'classnames'
import GoodsCarousel from '../../components/GoodsCarousel/GoodsCarousel'
import ShopAdvantages from '../../components/ShopAdvantages/ShopAdvantages'
import MainNewsList from '../../components/MainNewsList/MainNewsList'
import MainReviewsList from '../../components/MainReviewsList/MainReviewsList'
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper'
import TwoColumenedBlock from '../../ui/TwoColumenedBlock/TwoColumenedBlock'
import MainMap from '../../components/MainMap/MainMap'
import { ApiConsumer } from '../../utils/context-provider'
import texts from './constants/main-texts'
import images from '../../constants/images'
import './MainPage.scss'

class MainPage extends Component {
	renderMainAbout() {
		const { ABOUT_TITLE, ABOUT_TEXT } = texts;

		return (
			<div className={cx('main-page__about')}>
				<div className={cx('main-page__about-title')}>{ABOUT_TITLE}</div>
				<div className={cx('main-page__about-text')}>{ABOUT_TEXT}</div>
			</div>
		);
	}

	renderMainPartners() {
		return (
			<div className={cx('main__partners')}>
				<div className={cx('main-page__partners-title')}>{texts.PARTNERS_TITLE}</div>
				<div className={cx('main-page__partners-image-wrapper')}>
					<img src={images.PARTNER} className={cx('main-page__partners-image')} alt="" />
				</div>
			</div>
		);
	}

	renderPageBody(api) {
		return (
			<>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel handleFetchGoodsCarousel={api.specialsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<ShopAdvantages />
				</BlockWrapper>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel handleFetchGoodsCarousel={api.hitsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<TwoColumenedBlock left={this.renderMainAbout()} right={<MainNewsList />}/>
				</BlockWrapper>
				<BlockWrapper
					innerColor="white"
					className={cx('main-page__body-wrapper')}
					bottomBorder={true}
				>
					<TwoColumenedBlock left={this.renderMainPartners()} right={<MainReviewsList />}/>
				</BlockWrapper>
			</>
		);
	}
	
	render() {
		return (
			<ApiConsumer>
				{api => (
						<div className={cx('main-page')}>
							{this.renderPageBody(api)}
							<MainMap handleFetchMap={api.mainYmap} />
						</div>
					)
				}
			</ApiConsumer>
		)
	}
}

export default MainPage
