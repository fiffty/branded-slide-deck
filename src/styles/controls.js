export default {
	mainContainer: {
		position: 'absolute',
		width: '100%',
		height: 30,
		left: 0,
		bottom: 0
	},
	hoverContainer: {
		width: '100%',
		height: '100%',
		fontWeight: 300,
		color: '#FFFFFF',
		backgroundColor: 'rgba(0,0,0,0.4)',
		transition: 'all ease 0.4s',
		position: 'relative',
		left: 0
	},
	span: {
		display: 'block',
		fontSize: 12,
		position: 'absolute',
		top: 0,
		lineHeight: '30px'
	},
	pagination: {
		left: '50%',
		transform: 'translateX(-50%)'
	},
	prevBtn: {
		left: 'calc(50% - 50px)',
		transform: 'translateX(-100%)',
		cursor: 'pointer'
	},
	nextBtn: {
		left: 'calc(50% + 50px)',
		cursor: 'pointer'		
	},
	form: {
		fontSize: 12,
		display: 'inline-block'
	},
	input: {
		fontSize: 12,
		fontWeight: 300
	}
}