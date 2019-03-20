import React, { PureComponent } from 'react'
import './Popup.scss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Portal from '../../utils/Portal'
import { pageOverflow } from '../../utils/misc-functions'

class Popup extends PureComponent {
	static propTypes = {
		children: PropTypes.element.isRequired,
		handleClose: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            contentTop: 0,
            contentLeft: 0
        };
    }
    
    componentDidMount() {
        pageOverflow('hidden');
        this.handleContentPosition();
        window.addEventListener('resize', this.handleContentPosition);
    }

    componentWillUnmount() {
        pageOverflow('visible');
        window.removeEventListener('resize', this.handleContentPosition);
    }

    handleContentPosition = () => {
        const { clientWidth, clientHeight } = this.content;
        const topPosition = (window.innerHeight - clientHeight) / 2;
        const leftPosition = (window.innerWidth - clientWidth) / 2;

        this.setState({
            contentTop: topPosition,
            contentLeft: leftPosition
        });
    }

    handleWrapperClick = (event) => {
        event.target === this.wrapper && this.props.handleClose();
    }

	render() {
        const { children, handleClose } = this.props
        const { contentLeft, contentTop } = this.state;

		return (
			<Portal>
				<div
                    className={cx('popup')}
                    onClick={this.handleWrapperClick}
                    ref={wrapper => { this.wrapper = wrapper }}
                >
					<div
                        className={cx('popup__content')}
                        ref={content => { this.content = content }}
                        style={{ top: contentTop, left: contentLeft }}
                    >
                        <div className={cx('popup__close')} onClick={handleClose}>X</div>
                        {children}
                    </div>
				</div>
			</Portal>
		)
	}
}

export default Popup;
