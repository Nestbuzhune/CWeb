// Changing interval
		setInterval(function() {
			var text = document.getElementById("change-text");
			if (text.innerHTML === "Hello World!") {
				text.innerHTML = "Welcome to my website!";
			} else {
				text.innerHTML = "Hello World!";
			}
		}, 3000);

		// menu
		function toggleMenu() {
			var menu = document.getElementById("menu");
			if (menu.style.left === "-250px") {
				menu.style.left = "0";
			} else {
				menu.style.left = "-250px";
			}
		}

		// Moving image
		function moveImage() {
			var image = document.getElementById("image");
			image.style.transform = "translateX(200px)";
		}