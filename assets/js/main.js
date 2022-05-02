const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

new Swiper('.cycle__img__boxes', {
	spaceBetween: 10,
	direction: 'horizontal',
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 40,
		},

		769: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},

});

/* Link active portfolio */
// const linkPortfolio = document.querySelectorAll(".portfolio__item");

// function activePortfolio() {
// 	if (linkPortfolio) {
// 		linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
// 		this.classList.add("active-portfolio");
// 	}
// }

// linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));
