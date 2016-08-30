import React, {Component} from 'react'
import styles from '../styles/cover'

class Cover extends Component {
	render() {
		const {title, subtitle, logo, backgroundImage, companyName, pageNum} = this.props;
		const backgroundStyle = {
			backgroundImage: backgroundImage,
			width: 'calc(100% + 60px)',
			margin: '0 -30px'
		}
		return (
			<div style={styles.slide}>
				<div style={Object.assign({}, styles.section, backgroundStyle)}>
					<div style={styles.overlay}></div>
					<img style={styles.logo} src={logo} />
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