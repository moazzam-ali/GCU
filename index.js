var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
	SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
	SlideShow((slidePosition = n));
}

function SlideShow(n) {
	var i;
	var slides = document.getElementsByClassName("containers");
	var circles = document.getElementsByClassName("carousel-indicator");
	if (n > slides.length) {
		slidePosition = 1;
	}
	if (n < 1) {
		slidePosition = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < circles.length; i++) {
		circles[i].className = circles[i].className.replace(
			"enable",
			"carousal-indicator"
		);
	}
	slides[slidePosition - 1].style.display = "block";
	circles[slidePosition - 1].className += " enable";
}
// Slider in UGC Info Section from SwiperJs
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Accordion Functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		var image = this.querySelector("img");
		var arrowDown = "arrow-down.png";
		var arrowUp = "arrow-up";

		if (image.src.includes(arrowDown)) {
			image.src = `./img/arrow-up.png`;
			console.log("found");
		} else if (image.src.includes(arrowUp)) {
			image.src = `./img/arrow-down.png`;
		}

		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

//Animation Effect
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
