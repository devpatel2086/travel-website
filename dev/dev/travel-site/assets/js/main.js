(function () {
	const navToggle = document.getElementById('navToggle');
	const navLinks = document.getElementById('navLinks');
	const year = document.getElementById('year');
	const form = document.getElementById('contactForm');
	const formNote = document.getElementById('formNote');

	if (year) {
		year.textContent = new Date().getFullYear().toString();
	}

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', function () {
			navLinks.classList.toggle('show');
		});
	}

	if (form && formNote) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const data = new FormData(form);
			const name = String(data.get('name') || '').trim();
			const email = String(data.get('email') || '').trim();
			const message = String(data.get('message') || '').trim();

			if (!name || !email || !message) {
				formNote.textContent = 'Please complete all fields.';
				return;
			}

			formNote.textContent = 'Thanks! We\'ll get back to you soon.';
			form.reset();
		});
	}
})();
