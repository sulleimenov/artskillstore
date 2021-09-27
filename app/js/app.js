// Import jQuery module (npm i jquery)
import $ from 'jquery'
import Marquee from 'jquery.marquee'
import {
	Swiper,
	Pagination,
	Autoplay,
	Controller,
	Thumbs,
	EffectFade,
} from 'swiper'

window.jQuery = $
window.$ = $

Swiper.use([Pagination, Autoplay, Controller, Thumbs, EffectFade])

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

	const GalleryThumbnail = new Swiper('.gallery-thumbnail', {
		direction: 'vertical',
		slidesPerView: 6,
		mousewheel: false,
		keyboard: false,
		loop: false,
		preloadImages: false,
		lazy: true,
		allowTouchMove: false,
	})

	const GalleryPreview = new Swiper('.gallery-preview', {
		direction: 'horizontal',
		effect: 'creative',
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ['-20%', 0, -1],
			},
			next: {
				translate: ['100%', 0, 0],
			},
		},
		thumbs: {
			swiper: GalleryThumbnail,
		},
		loop: false,
		preloadImages: false,
		lazy: true,
		breakpoints: {
			768: {
				direction: 'vertical',
				allowTouchMove: false,
			},
		},
		pagination: {
			el: '.swiper-pagination',
		},
	})

	$('.home-catalog__marquee').marquee({
		duration: 18000,
		startVisible: true,
		duplicated: true,
	})

	function showCategoryFooter() {
		const button = document.querySelector('.footer__list--category')
		if (button) {
			button.addEventListener('click', () => {
				button.classList.toggle('show')
			})
		}
	}

	function showCategoryCatalog() {
		const button = document.querySelector('.catalog-list-button')
		const buttonOpen = document.querySelector('.catalog-list-button__open')
		const buttonClose = document.querySelector('.catalog-list-button__close')
		const content = document.querySelector('.catalog-popup')
		if (button) {
			button.addEventListener('click', () => {
				content.classList.toggle('d-block')
				buttonOpen.classList.toggle('d-none')
				buttonClose.classList.toggle('d-block')
			})
		}
	}

	function AddFavorites() {
		const button = document.querySelector('#AddFavorites')
		const star = document.querySelector('.product__favorites')
		const toFavorites = document.querySelector('.button-to-favorites')
		const inFavorites = document.querySelector('.button-in-favorites')
		if (button) {
			button.addEventListener('click', () => {
				star.classList.toggle('product__favorites--add')
				toFavorites.classList.toggle('d-none')
				inFavorites.classList.toggle('d-block')
			})
		}
	}

	function CustomizationInput() {
		const initials = document.querySelector('#initials')
		const initials_input = document.querySelector('#initials_input')
		const quote = document.querySelector('#quote')
		const quote_input = document.querySelector('#quote_input')
		const no = document.querySelector('#no')
		if (initials) {
			initials.addEventListener('click', () => {
				initials_input.classList.add('d-block')
				quote_input.classList.remove('d-block')
			})
		}
		if (quote) {
			quote.addEventListener('click', () => {
				quote_input.classList.add('d-block')
				initials_input.classList.remove('d-block')
			})
		}
		no.addEventListener('click', () => {
			quote_input.classList.remove('d-block')
			initials_input.classList.remove('d-block')
		})
	}

	showCategoryFooter()
	showCategoryCatalog()
	AddFavorites()
	CustomizationInput()
})
