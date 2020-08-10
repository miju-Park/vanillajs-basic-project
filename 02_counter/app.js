//Set Initial count
let count = 0;

// Select value and button
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('reset')) {
			count = 0;
		} else if (styles.contains('increase')) {
			count++;
		}
		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = '#222';
		}
		value.textContent = count;
	});
});
