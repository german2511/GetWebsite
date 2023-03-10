$(document).ready(function() {
	
	// scroll
	const anchors = document.querySelectorAll('a[href*="#"]')
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

	// burger menu
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

	// Form
	$('.first-view__button').on('click', function(){
		$('.request').fadeIn(1000);
	});
	$('.request__close').on('click', function(){
		$('#myForm').fadeOut(1000);
	});

})