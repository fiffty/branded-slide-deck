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
			hovered: false,
			showSidebar: false
		}

		this.goToSlide = this.goToSlide.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
		this.toggleSidebar = this.toggleSidebar.bind(this)
		this.launchFullscreen = this.launchFullscreen.bind(this)
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
	componentWillMount() {
		this.setState({
			showSidebar: this.props.showSidebar
		})
	}
	toggleSidebar() {
		this.setState({
			showSidebar: !this.state.showSidebar
		})
	}
	launchFullscreen() {
		launchIntoFullscreen(this.refs.brandedslidedeck)

		function launchIntoFullscreen(element) {
		  if(element.requestFullscreen) {
		    element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
		    element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
		    element.webkitRequestFullscreen();
		  } else if(element.msRequestFullscreen) {
		    element.msRequestFullscreen();
		  }
		}
	}
	render() {
		const {companyName, canResize} = this.props
		const {currentSlide, showSidebar, hovered} = this.state
		const slidesContainerWidth = {
			width: (showSidebar) ? '80%' : null,
			left: (showSidebar) ? '20%' : 0
		}

		let slides = this.props.slides
		if (!slides || slides.length === 0) {
			slides = [{
				columns: [{
					size: 12,
					elems: [{
						tag: 'span',
						type: 'kindabig',
						content: 'Hello World'
					}, {
						tag: 'span',
						type: 'kindasmall',
						content: 'let\'s create a great deck'				
					}]
				}],		
				background: {
					type: 'light',
					backgroundColor: '#FFFFFF',
					backgroundImage: undefined,
				}
			}]
		}

		return (
			<div ref="brandedslidedeck" style={styles.mainContainer}>
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
						toggleSidebar={this.toggleSidebar}
						launchFullscreen={this.launchFullscreen}
						hovered={hovered} />
				</div>
			</div>
		)
	}
}

export default BrandedSlideDeck