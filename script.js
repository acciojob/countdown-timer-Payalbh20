function myFunction() {
const startingMins = document.getElementById(custom);
let time = startingMins*60;

const countdownEl = document.getElementByClassName(display__time-left);
const endtimeEl = document.getElementByClassName(display__end-time);

let currentTime = new Date();	
setInterval(updateCountdown, 1000);

function updateCountdown(startingMins) {
	const minutes = Math.floor(time/60);
	let seconds = time%60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	currentTime = currentTime + 
	countdownEl.innerHTML = `${minutes} : ${seconds}`;
	time--;
}

}
