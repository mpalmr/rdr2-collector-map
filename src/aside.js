export default function initializeAsideMenu() {
	const aside = document.querySelector('.aside');
	const toggleButton = aside.querySelector('.aside-toggle');

	// Toggle aside menu open and closed
	toggleButton.addEventListener('click', () => {
		aside.classList.toggle('open');
		toggleButton.textContent = aside.classList.contains('open') ? 'Close' : 'Open';
	});
}
