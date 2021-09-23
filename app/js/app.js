// Import jQuery module (npm i jquery)
import $ from 'jquery'
import Marquee from 'jquery.marquee'
import { Swiper, Pagination, Autoplay, Controller } from 'swiper'

window.jQuery = $
window.$ = $

Swiper.use([Pagination, Autoplay, Controller])

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	const HomeBunner = new Swiper('.home-slider', {
		loop: false,
		preloadImages: false,
		lazy: true,
		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.swiper-pagination',
		},
	})
	
	const HomeBunnerText = new Swiper('.home-slider-text', {
		loop: false,
		preloadImages: false,
		lazy: true,
		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.swiper-pagination',
		},
	})

	HomeBunner.controller.control = HomeBunnerText
	HomeBunnerText.controller.control = HomeBunner

	$('.home-catalog__marquee').marquee({
		duration: 18000,
		startVisible: true,
		duplicated: true
	});

	function showCategoryFooter() {
		const button = document.querySelector('.footer__list--category')
		button.addEventListener('click', () => {
			button.classList.toggle('show')
		});
	}

	showCategoryFooter()
})
