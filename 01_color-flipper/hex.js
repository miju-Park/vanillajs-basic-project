const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', () => {
	//Get random number between 0 ~ 3
	let randomIndex = Math.floor(Math.random() * hex.length);
	let hexValue = '#';
	for (let i = 0; i < 6; i++) {
		randomIndex = Math.floor(Math.random() * hex.length);
		hexValue += hex[randomIndex];
	}
	document.body.style.background = hexValue;
	color.textContent = hexValue;
});
