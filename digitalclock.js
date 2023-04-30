var slideIndex = 0;
		showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].classList.add("active");
	setTimeout(showSlides, 3000);
}

function displayTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	hours = (hours < 10 ? "0" : "") + hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;
	var time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clock").innerHTML = time;
	setTimeout(displayTime, 1000);
}

displayTime();