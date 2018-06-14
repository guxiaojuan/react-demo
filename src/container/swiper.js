import React from 'react';
import Swipper from 'swiper'
require ('../style/swiper.css');


export default class Swiper extends React.Component {
	componentDidMount () {
		let swiper = new Swipper('.swiper-container', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true,
			},
			pagination: {
				el: '.swiper-pagination',
			},
		})
	}
	render () {
		return (
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide img1"></div>
					<div className="swiper-slide img2"></div>
					<div className="swiper-slide img3"></div>
				</div>
			</div>
		)
	}
}