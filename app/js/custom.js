// FUNCTIONS

function checkInput() {
	if (this && this.value) {
		this.classList.add("has-value");
	} else {
		this.classList.remove("has-value");
	}
}

function selectDate () {
	date.value = this.innerHTML;
	document.querySelector('.active').classList.remove('active');
	this.classList.add('active');
	checkInput.call(date);
	toggleOptions.call(date);
}

function toggleOptions () {
	this.classList.toggle("date-open");
}

function menuToggle() {
	document.querySelector('.header-menu').classList.toggle('active');
}



// GET ELEMENTS

var linkNav = document.querySelectorAll('.menu-list__link'), V = 1,  
	inputsInfo = document.querySelectorAll('.form-block_info .form-control'),
	date = document.getElementById('date'),
	dateOptions = document.querySelectorAll('.date-list__item'),
	menuOpen = document.querySelector('.menu-open');



// ADD_EVENT_LISTENER

for (var i = 0; i < inputsInfo.length; i++) {
	inputsInfo[i].addEventListener('blur', checkInput, false);
}

for (var i = 0; i < dateOptions.length; i++) {
	dateOptions[i].addEventListener('click', selectDate, false);
}

for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
        menuToggle();
    }, false);
}

date.addEventListener('click', toggleOptions, false);

menuOpen.addEventListener('click', menuToggle, false);



