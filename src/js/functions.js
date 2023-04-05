$(document).ready(function () {
	initMobileMenu();
	initSlider();
});
function initMobileMenu() {
	'use strict;';
	let navigation = $('.nav__list'),
		hamburger = $('.hamburger');
	if (hamburger.length) {
		hamburger.on({
			click: function () {
				$(this).toggleClass('open');
				navigation.toggleClass('active');
			},
			tap: function () {
				$(this).toggleClass('open');
				navigation.toggleClass('active');
			},
		});
	}
}

function initSlider() {
	'use strict;';
	$('.cards__list').slick({
		dots: false,
		infinite: true,
		arrows: true,
		prevArrow: '.left__button',
		nextArrow: '.right__button',
		draggable: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
}