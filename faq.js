
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