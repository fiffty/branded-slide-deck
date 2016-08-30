import React, {Component} from 'react'
import Slides from './Slides'
import Controls from './Controls'
import Sidebar from './Sidebar'
import styles from '../styles/brandedslidedeck'

class BrandedSlideDeck extends Component {
	constructor() {
		super()
		this.state = {
			currentSlide: 0,
			hovered: false
		}

		this.goToSlide = this.goToSlide.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
	}
	goToSlide(slideIndex) {
		if (slideIndex < 0 || slideIndex > this.props.slides.length - 1) return;
		this.setState({
			currentSlide: slideIndex
		})
	}
	handleMouseEnter() {
		this.setState({
			hovered: true
		})
	}
	handleMouseLeave() {
		this.setState({
			hovered: false
		})
	}
	render() {
		const {slides, companyName, showSidebar, canResize} = this.props
		const {currentSlide, hovered} = this.state
		const slidesContainerWidth = {
			width: (showSidebar) ? '80%' : null,
			left: (showSidebar) ? '20%' : 0
		}
		return (
			<div style={styles.mainContainer}>
				{(showSidebar) ? 
					<Sidebar canResize={canResize}>
						<Slides 
							canResize={canResize}
							slides={slides} 
							currentSlide={currentSlide} 
							companyName={companyName}
							inSidebar={true}
							goToSlide={this.goToSlide} />
					</Sidebar> 
				: null}
				<div 
					style={Object.assign({}, styles.slidesContainer, slidesContainerWidth)}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}>
					<Slides 
						canResize={canResize}
						slides={slides} 
						currentSlide={currentSlide} 
						companyName={companyName} />
					<Controls 
						currentSlide={currentSlide} 
						numberOfSlides={slides.length} 
						goToSlide={this.goToSlide}
						hovered={hovered} />
				</div>
			</div>
		)
	}
}

export default BrandedSlideDeck