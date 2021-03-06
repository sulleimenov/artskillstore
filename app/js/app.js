// Import jQuery module (npm i jquery)
import $ from 'jquery'
import Marquee from 'jquery.marquee'
import Cookies from 'js-cookie'
import Select2 from 'select2'
import MicroModal from 'micromodal'
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
	MicroModal.init({
		// onShow: (modal) => console.info(`${modal.id} is shown`),
		// onClose: (modal) => console.info(`${modal.id} is hidden`),
		openTrigger: 'data-micromodal-open',
		closeTrigger: 'data-micromodal-close',
		awaitOpenAnimation: true,
		// awaitCloseAnimation: true,
		disableFocus: true,
		onClose: function (modal, element, event) {
			event.preventDefault()
			event.stopPropagation()
			document.body.classList.remove('overflow')
		}
	})

	$('.js-select').select2({
		minimumResultsForSearch: -1,
	});

	const scrollModal = () => {
		const button = document.querySelector('.scroll')
		const detailed = document.querySelector('.scroll-detailed')
		const desc = document.querySelector('.scroll-descr')
		if (button) {
			button.addEventListener('click', () => {
				document.body.classList.add('overflow')
			})
		}
		if (detailed) {
			detailed.addEventListener('click', () => {
				document.body.classList.add('overflow')
			})
		}
		if (desc) {
			desc.addEventListener('click', () => {
				document.body.classList.add('overflow')
			})
		}
	}

	scrollModal()

	const autoOpenModal = () => {
		setTimeout(() => {
			MicroModal.show('delivery_country')
		}, 7000);
	}

	const policyButton = () => {
		const policyButton = document.querySelector('.cookie-policy__button')
		const policyWrapper = document.querySelector('.cookie-policy-wrapper')
		if (Cookies.get('policy')) {
			policyWrapper.classList.add('hidden')
		}
		if (policyButton) {
			policyButton.onclick = () => {
				policyWrapper.classList.add('hidden')
				Cookies.set('policy', 'permission', { expires: 7 })
			}
		}
		
	}

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
		autoHeight: true,
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
		duration: 36000,
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

	function showCategoryHeader() {
		const button = document.querySelector('.mobile-menu__box-title')
		const content = document.querySelector('.mobile-menu__box-list')
		if (button) {
			button.addEventListener('click', () => {
				content.classList.toggle('show')
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

	function showOrder() {
		const button = document.querySelector('.order-info__button-show')
		const buttonClose = document.querySelector('.order-info__button-close')
		const content = document.querySelector('.order-info__wrapper')
		if (button) {
			button.addEventListener('click', () => {
				content.classList.add('d-block')
				buttonClose.classList.add('d-block')
				button.classList.add('d-none')
			})
		}
		if (buttonClose) {
			buttonClose.addEventListener('click', () => {
				content.classList.remove('d-block')
				buttonClose.classList.remove('d-block')
				button.classList.remove('d-none')
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

	const order = () => {
		const orderVisibility = document.querySelector('.order__visibility')
		const goToDelivery = document.querySelector('#goToDelivery')
		const regionDelivery = document.querySelector('#regionDelivery')
		const deliveryMethod = document.querySelector('#deliveryMethod')
		const paymentMethod = document.querySelector('#paymentMethod')

		const demonstratePersonalData = document.querySelector('#demonstratePersonalData')
		const demonstrateRegionDelivery = document.querySelector('#demonstrateRegionDelivery')
		const demonstrateDelivery = document.querySelector('#demonstrateDelivery')

		const demonstrateCountry = document.querySelector('#demonstrateCountry')
		const demonstrateCity = document.querySelector('#demonstrateCity')

		const thenRegion = document.querySelector('#thenRegion')
		const country = document.querySelector('#country')
		const city = document.querySelector('#??ity')
		const thenPayment = document.querySelector('#thenPayment')

		if (goToDelivery) {
			goToDelivery.addEventListener('click', () => {
				orderVisibility.classList.remove('show')
				regionDelivery.classList.add('show')
				demonstratePersonalData.classList.add('show')
			})
		}

		if (thenRegion) {
			thenRegion.onclick = () => {
				country.classList.add('hidden')
				city.classList.remove('hidden')
				demonstrateRegionDelivery.classList.add('show')
				demonstrateCountry.classList.remove('hidden')
				thenRegion.classList.add('thenCity')
				if (document.querySelector('.thenCity')) {
					document.querySelector('.thenCity').onclick = () => {
						demonstrateCity.classList.remove('hidden')
						regionDelivery.classList.remove('show')
						deliveryMethod.classList.add('show')
					}
				}
			}
		}

		if(thenPayment) {
			thenPayment.onclick = () => {
				paymentMethod.classList.add('show')
				deliveryMethod.classList.remove('show')
				demonstrateDelivery.classList.add('show')
			}
		}

		if (document.querySelector('#delivery')) {
			document.querySelector('#delivery').onclick = () => {
				document.querySelector('.order__delivery-delivery').classList.add('show')
				document.querySelector('.order__delivery-pickup').classList.remove('show')
			}
			if(document.querySelector('#pickup')) {
				document.querySelector('#pickup').onclick = () => {
					document.querySelector('.order__delivery-pickup').classList.add('show')
					document.querySelector('.order__delivery-delivery').classList.remove('show')
				}
			}
		}

		if (document.getElementById('selectDelivery')) {
			let select = document.getElementById('selectDelivery')
			let block = document.querySelectorAll('.order__delivery-info-text')
			let lastIndex = 0 // ?????????? ???????????? ?????????? ??????????, ?????????????????? ???????? ???????????? ?????????????????????? ??????????

			select.addEventListener('change', function () {
				block[lastIndex].style.display = 'none'
				// ?????????? ?????????? ???????????? ???????????? ?????? ?????????????????? ?????? ?????????????????? ??????????

				let index = select.selectedIndex // ???????????????????? ???????????? ?????????????????? ??????????
				block[index].style.display = 'block' // ???????????????? ???????? ?? ?????????????????????????????? ????????????????

				lastIndex = index // ???????????????? ?????????????????????? ????????????.
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
		if (no) {
			no.addEventListener('click', () => {
				quote_input.classList.remove('d-block')
				initials_input.classList.remove('d-block')
			})
		}
	}

	const resetPassword = () => {
		const button = document.querySelector('#resetPassword')
		const content = document.querySelector('.reset-password__check')
		const form = document.querySelector('.reset-password__form')
		const input = document.querySelector('#reset-password__input')
		if(button) {
			button.onclick = () => {
				content.classList.add('show')
				form.classList.add('hidden')
			}
		}
	}

	const accountMenu = () => {
		const open = document.querySelector('.page__title-open')
		const close = document.querySelector('.page__title-close')
		const content = document.querySelector('.page__nav')
		if(open) {
			open.onclick = () => {
				open.classList.add('hidden')
				close.classList.add('d-flex')
				content.classList.add('d-flex')
			}
			close.onclick = () => {
				open.classList.remove('hidden')
				close.classList.remove('d-flex')
				content.classList.remove('d-flex')
			}
		}
	}

	resetPassword()
	showCategoryFooter()
	showCategoryHeader()
	showCategoryCatalog()
	AddFavorites()
	CustomizationInput()
	showOrder()
	order()
	accountMenu()
	autoOpenModal()
	policyButton()
})
