import React from 'react'
import {render} from 'react-dom'
import BrandedSlideDeck from './components/BrandedSlideDeck'

const slides = [{
	cover: {
		title: 'User Experience Design',
		subtitle: 'Week 01<br>User Experience Design Immersive',
		logo: 'img/logo.png',
		backgroundImage: 'url(img/bs-1518.jpg)'
	}
},{
	columns: [{
		size: 12,
		elems: [{
			tag: 'span',
			type: 'supabig',
			content: 'Design Thinking'
		}]
	}],		
	background: {
		type: 'dark',
		backgroundColor: '#1CBFD1',
		backgroundImage: 'url(img/bs-0214.jpg)',
	}
}, {
	columns: [{
		size: 12,
		elems: [{
			tag: 'span',
			type: 'kindabig',
			content: 'experience designers'
		}, {
			tag: 'span',
			type: 'kindasmall',
			content: 'Understand the path of least resistance'				
		}]
	}],		
	background: {
		type: 'light',
		backgroundColor: '#FFFFFF',
		backgroundImage: undefined,
	}
}, {
	columns: [{
		size: 12,
		elems: [{
			tag: 'span',
			type: 'quote',
			content: "User Experience encompasses all aspects of the end-user's interaction with the company, its services, and its products."
		}, {
			tag: 'span',
			type: 'author',
			content: '- Jakob Nielson & Don Norman'				
		}]
	}],		
	background: {
		type: 'dark',
		backgroundColor: '#1CBFD1',
		backgroundImage: undefined,
	}
}, {
	title: 'UX Strategy & Research',
	columns: [{
		size: 12,
		elems: [{
			tag: 'span',
			type: 'text',
			content: "What did you accomplish in the last week? What are you going to do in the coming week? Where are you stuck? How can we help?<br>Format: Divide into groups of 5-7.<br>Everyone will have 3-5 minutes to review their project."
		}, {
			tag: 'img',
			type: 'imageFull',
			content: 'img/ux-fundamentals.png'				
		}]
	}],		
	background: {
		type: 'light',
		backgroundColor: '#FFFFFF',
		backgroundImage: undefined,
	}
}, {
	title: 'Logistics',
	columns: [{
		size: 8,
		elems: [{
			tag: 'span',
			type: 'text',
			content: "What did you accomplish in the last week? What are you going to do in the coming week? Where are you stuck? How can we help?<br>Format: Divide into groups of 5-7.<br>Everyone will have 3-5 minutes to review their project."
		}]
	}, {
		size: 4,
		elems: [{
			tag: 'img',
			type: 'imageFull',
			content: "img/map.png"
		}]			
	}],		
	background: {
		type: 'light',
		backgroundColor: '#FFFFFF',
		backgroundImage: undefined,
	}
}];

render(<BrandedSlideDeck slides={slides} companyName={'BrainStation Inc'} />, document.getElementById('app'))