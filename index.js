/*document.querySelectorAll("button").forEach((button) =>
	button.addEventListener("click", function () {
		alert("I got clicked");
	})
);*/

const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) =>
	button.addEventListener("click", function () {
		playInstrument(button);
		button.classList.add("zoom");
		setTimeout(function () {
			button.classList.remove("zoom");
		}, 800);
	})
);

function playInstrument(button) {
	let audio;
	console.log(button);
	switch (button.innerHTML) {
		case "w":
			audio = new Audio(`sounds/tom-1.mp3`);
			audio.play();
			break;
		case "a":
			audio = new Audio(`sounds/tom-2.mp3`);
			audio.play();
			break;
		case "s":
			audio = new Audio(`sounds/tom-3.mp3`);
			audio.play();
			break;
		case "d":
			audio = new Audio(`sounds/tom-4.mp3`);
			audio.play();
			break;
		case "j":
			audio = new Audio(`sounds/snare.mp3`);
			audio.play();
			break;
		case "k":
			audio = new Audio(`sounds/kick-bass.mp3`);
			audio.play();
			break;
		case "l":
			audio = new Audio(`sounds/crash.mp3`);
			audio.play();
			break;
	}
}
