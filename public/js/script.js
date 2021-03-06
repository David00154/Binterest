/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

// $(window).on('load', function () {
// 	$('.preloader').fadeOut(100);
// });

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	let preloader = $('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      
      setInterval(() => {
      	preloader.remove()
      	AOS.init({
		      duration: 1000,
		      easing: 'ease-in',
		      once: false,
		    })
		     // $('.aniview').AniView();
      }, 5000)
    });
  }



	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */



	function myFunction(x) {
		if (x.matches) {
			var topOf = 50
		} else {
			var topOf = 350
		}
	}

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	// jQuery.extend(jQuery.easing, {
	// 	easeInOutExpo: function (x, t, b, c, d) {
	// 		if (t === 0) {
	// 			return b;
	// 		}
	// 		if (t === d) {
	// 			return b + c;
	// 		}
	// 		if ((t /= d / 2) < 1) {
	// 			return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	// 		}
	// 		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	// 	}
	// });

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}

	// Swiper
	// const swiper = new Swiper('.swiper-container', {
	// 	  spaceBetween: 30,
 //      centeredSlides: true,
 //      autoplay: {
 //        delay: 2500,
 //        disableOnInteraction: false,
 //      },
 //      pagination: {
 //        el: '.swiper-pagination',
 //        clickable: true,
 //      },
 //      navigation: {
 //        nextEl: '.swiper-button-next',
 //        prevEl: '.swiper-button-prev',
 //      },
	// 	});


	$(window).on('scroll', function () {
		counter();
	});

	// jQuery("document").ready(() => {
		// console.log("Faker", faker)
	  setInterval(() => {
	    $("#country")[0].textContent = faker.address.country();
	    $("#balance")[0].textContent =
	      "$" + faker.finance.amount().split(".").join(",") + 0;
	    $("#pop-up")[0].classList.toggle("hidden");
	    setTimeout(() => {
	      $("#pop-up")[0].classList.toggle("hidden");
	    }, 9000);
	  }, 17555);
	// });


});

(function ($) {
		const cookieBox = document.getElementById('js-cookie-box');
		const cookieButton = document.getElementById('js-cookie-button');
		if (!Cookies.get('cookie-box')) {
			cookieBox.classList.remove('cookie-box-hide');
			cookieButton.onclick = function () {
				Cookies.set('cookie-box', true, {
					expires: 2
				});
				cookieBox.classList.add('cookie-box-hide');
			};
		}
	})(jQuery);

// jQuery("document").ready(() => {
// 	console.log("Faker", faker)
//   setInterval(() => {
//     $("#country")[0].textContent = faker.address.country();
//     $("#balance")[0].textContent =
//       "$" + faker.finance.amount().split(".").join(",") + 0;
//     $("#pop-up")[0].classList.toggle("hidden");
//     setTimeout(() => {
//       $("#pop-up")[0].classList.toggle("hidden");
//     }, 9000);
//   }, 17555);
// });


