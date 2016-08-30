import React, {Component} from 'react'
import {render} from 'react-dom'
import Slides from './Slides'
import Controls from './Controls'

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
		const {slides, companyName} = this.props
		const {currentSlide, hovered} = this.state
		return (
			<div 
				style={{width: '100%', position: 'relative', overflow: 'hidden'}}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>
				<Slides slides={slides} currentSlide={currentSlide} companyName={companyName}/>
				<Controls 
					currentSlide={currentSlide} 
					numberOfSlides={slides.length} 
					goToSlide={this.goToSlide}
					hovered={hovered} />
			</div>
		)
	}
}

export default BrandedSlideDeck