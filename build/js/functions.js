$(document).ready(function () {
	initMobileMenu();
	initSlider();
	initImgReplace();
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
	$('.slider__items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__controls',
	});
	$('.slider__controls').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		accessibility: true,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.slider__items',
		onAfterChange: function (slide, index) {
			$('.current-slide').removeClass('current-slide');
			$(this.$slides.get(index)).addClass('current-slide');
		},
		onInit: function (slick) {
			$(slick.$slides.get(0)).addClass('current-slide');
		},
	});
	// $('.cards__list').slick({
	// 	dots: false,
	// 	infinite: true,
	// 	arrows: true,
	// 	prevArrow: '.left__button',
	// 	nextArrow: '.right__button',
	// 	draggable: true,
	// 	speed: 300,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 4,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		// You can unslick at a given breakpoint now by adding:
	// 		// settings: "unslick"
	// 		// instead of a settings object
	// 	],
	// });
}
function initImgReplace() {
	'use strict;';
	$('.slider__item').each(function () {
		let imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		console.log(imgHolder);
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: `url(${imgSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
			});
			img.remove();
		}
	});
}
