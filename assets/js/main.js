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

/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show-menu");
			console.log(nav)
		});
	}
};
showMenu("nav-toggle", "nav-menu");

/* Link active portfolio */
// const linkPortfolio = document.querySelectorAll(".portfolio__item");

// function activePortfolio() {
// 	if (linkPortfolio) {
// 		linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
// 		this.classList.add("active-portfolio");
// 	}
// }

// linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

// Gsap animations
gsap.from(".home__img, .home__data", {
	opacity: 0,
	duration: 2,
	delay: 0.5,
});

gsap.from(".nav__logo, .nav__toggle", {
	opacity: 0,
	duration: 2,
	delay: 1.5,
	y: 25,
	ease: "expo.out",
	stagger: 0.2,
});

gsap.from(".nav__item", {
	opacity: 0,
	duration: 2,
	delay: 1.5,
	y: 25,
	ease: "expo.out",
	stagger: 0.2,
});