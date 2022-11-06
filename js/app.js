document.addEventListener('DOMContentLoaded', function () {
	if (screen.width > 576) {
		const swiperMobile = document.querySelector('.swiper-slide-mobile')
		swiperMobile.remove()
	}

	const menu_button = document.querySelector('.menu-toggle')

	menu_button.addEventListener('click', () => toggleMenu())

	function toggleMenu() {
		menu_button.classList.toggle('menu-toggle__active')
		document
			.querySelector('.menu-items-toggle')
			.classList.toggle('menu-items__active')
	}
})
