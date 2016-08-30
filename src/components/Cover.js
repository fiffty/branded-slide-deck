import React, {Component} from 'react'
import styles from '../styles/cover'

class Cover extends Component {
	render() {
		const {title, subtitle, logo, backgroundColor, backgroundImage, companyName, pageNum, isCurrentSlide, inSidebar} = this.props;
		const backgroundStyle = {
			backgroundColor: backgroundColor,
			backgroundImage: backgroundImage
		}
		const visibilityStyles = {
			visibility: (!isCurrentSlide && !inSidebar)? 'hidden' : 'visible'
		}
		const slideStyle = (inSidebar) ? styles.sidebarSlide : styles.slide
		return (
			<div style={Object.assign({}, slideStyle, visibilityStyles)}>
				<div style={Object.assign({}, styles.section, backgroundStyle)}>
					<div style={styles.overlay}></div>
					{(logo) ? <img style={styles.logo} src={logo} /> : null}
				</div>

				<div style={styles.section}>
					<span style={Object.assign({}, styles.span, styles.title)}>{title}</span>
					<span style={Object.assign({}, styles.span, styles.subtitle)} dangerouslySetInnerHTML={{__html: subtitle}}></span>
					<span style={Object.assign({}, styles.span, styles.copyright)}>
						© {companyName} {new Date().getFullYear()}. All rights reserved.<br />
						This material and all course content is the proprietary intellectual property of {companyName}. and may only be used by course participants or educators for educational purposes as authorized by BrainStation. Any other use is unauthorized and unlawful.
					</span>
				</div>
			</div>
		)
	}
}

export default Cover