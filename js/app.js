

const navSlider = () => {
	const burgere = document.querySelector('.burger');
	const nav = document.querySelector('.navLink');
	const navLIKE = document.querySelectorAll('.navLink li');
	
	// toggle nav

	burgere.addEventListener('click', () => {

		nav.classList.toggle('navAcktive');

	navLIKE.forEach((link, index) => {
	
		if (link.style.animation) {
			link.style.animation = '';
		}else{
			link.style.animation = 	`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
		}
	});

		burgere.classList.toggle('toggle');
});


}
navSlider();