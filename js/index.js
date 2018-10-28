//(function () {
	//'use strict';

	let body            = document.querySelector('body'),
	    menuOpen        = document.querySelector('.nav-container'),
	    mobileTrigger   = document.querySelector('.mobile-nav-icon'),
	    mobileMenuClose = document.querySelector('.mobile-nav-close'),
	    inputArea       = document.querySelectorAll('.input-field'),
	    menuItem        = document.querySelectorAll('.menu-link'),
	    overlay         = document.querySelector('.section-overlay'),
	    animatedObject  = document.querySelectorAll('.js-animation'),
	    windowHeight    = window.innerHeight;

//Mobile Menu Toggle
	menuOpen.addEventListener('mouseover', function () {
		menuOpen.classList.toggle('minimized');
	});

	menuOpen.addEventListener('mouseout', function () {
		menuOpen.classList.toggle('minimized');
	});

	mobileTrigger.addEventListener('click', function () {
		menuOpen.classList.toggle('minimized');
	});

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
        body.classList.toggle('minimized');
    });
}

	//menuItem.forEach(el => {
	//	el.addEventListener('click', function () {
	//		body.classList.toggle('minimized');
	//	});
	//});

	mobileMenuClose.addEventListener('click', function () {
		body.classList.toggle('minimized');
	});

//Check for not-empty Field for Floating Label
for (let i = 0; i < inputArea.length; i++) {
    inputArea[i].addEventListener('keyup', function () {
        if (inputArea[i].value.length > 0) {
            inputArea[i].classList.add('not-empty');
        } else {
            inputArea[i].classList.remove('not-empty');
        }
    });
}



	//inputArea.forEach(el => {
	//	el.addEventListener('keyup', function () {
	//		if (el.value.length > 0) {
	//			el.classList.add('not-empty');
	//		} else {
	//			el.classList.remove('not-empty');
	//		}
	//	});
	//});

for (let i = 0; i < inputArea.length; i++) {
    inputArea[i].addEventListener('keyup', function () {
        if (inputArea[i].value.length > 0) {
            inputArea[i].classList.add('not-empty');
        } else {
            inputArea[i].classList.remove('not-empty');
        }
    });
}

	//inputArea.forEach(el => {
	//	el.addEventListener('keyup', function () {
	//		if (el.value.length > 0) {
	//			el.classList.add('not-empty');
	//		} else {
	//			el.classList.remove('not-empty');
	//		}
	//	});
	//});

	// Darken Cover Background on Scroll
	window.addEventListener('scroll', function () {
		let scrollPos = window.scrollY,
		    height    = overlay.clientHeight;

		overlay.classList.remove('hidden');
		overlay.style.opacity = 0.7 - (height - scrollPos) / height;

		if (scrollPos < 200) {
			overlay.classList.add('hidden');
		}
	});

//Smoothscroll
//	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//		anchor.addEventListener('click', function (e) {
//			e.preventDefault();
//
//			document.querySelector(this.getAttribute('href')).scrollIntoView({
//				behavior: 'smooth'
//			});
//		});
//	});

    for (let i = 0; i < animatedObject.length; i++) {
        window.addEventListener('scroll', function () {
            let posTop = animatedObject[i].getBoundingClientRect().y;
            if (posTop - windowHeight <= 0) {
                animatedObject[i].className = animatedObject[i].className.replace('js-animation', 'fade-in');
            }
        });
    }


    //animatedObject.forEach(el => {
	//	window.addEventListener('scroll', function () {
	//		let posTop = el.getBoundingClientRect().top;
	//		if (posTop - windowHeight <= 0) {
	//			el.className = el.className.replace('js-animation', 'fade-in');
	//		}
	//	});
	//});
//})();
