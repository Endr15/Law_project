document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		spaceBetween: 10,
		loop: true,
		speed: 1000,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},

		mousewheel: {
			invert: false,
			forceToAxis: true,
		},
	})

	const reviews = new Swiper('.slider-review', {
		loop: true,
		speed: 1000,
	})

	const serviceSwiper = new Swiper('.aboutService-content__swiper', {
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		slidesPerView: 1,

		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},

		mousewheel: {
			invert: false,
			forceToAxis: true,
		},
	})
})
