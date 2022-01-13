/*document.querySelectorAll("button").forEach((button) =>
	button.addEventListener("click", function () {
		alert("I got clicked");
	})
);*/

const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) =>
	button.addEventListener("click", function () {
		playInstrument(button.innerHTML);
	})
);

function playInstrument(button) {
	let audio;
	switch (button) {
		case "w":
			audio = new Audio(`sounds/tom-1.mp3`);
			audio.play();
			setAnimation("w");
			break;
		case "a":
			audio = new Audio(`sounds/tom-2.mp3`);
			audio.play();
			setAnimation("a");
			break;
		case "s":
			audio = new Audio(`sounds/tom-3.mp3`);
			audio.play();
			setAnimation("s");
			break;
		case "d":
			audio = new Audio(`sounds/tom-4.mp3`);
			audio.play();
			setAnimation("d");
			break;
		case "j":
			audio = new Audio(`sounds/snare.mp3`);
			audio.play();
			setAnimation("j");
			break;
		case "k":
			audio = new Audio(`sounds/kick-bass.mp3`);
			audio.play();
			setAnimation("k");
			break;
		case "l":
			audio = new Audio(`sounds/crash.mp3`);
			audio.play();
			setAnimation("l");
			break;
	}
}
function setAnimation(key) {
	const activeButton = document.querySelector(`.${key}`);
	activeButton.classList.add("zoom");
	setTimeout(function () {
		activeButton.classList.remove("zoom");
	}, 800);
}

// Keydown
document.addEventListener("keydown", function (e) {
	playInstrument(e.key);
});
