'use strict';

let rendered = false;
document.addEventListener('readystatechange', () => {
	if (rendered)
		return;

	rendered = true;
	const galleryAnchor = document.querySelector('#gallery');
	const create = (elName) => document.createElement(elName);
	GALLERY_LISTING.trim().split('\n').forEach(it => {
		const div = create('div');
		div.classList.add('gallery-item');
		const button = create('button');
		const img = create('img');
		img.src = getPrefix() + it;
		img.alt = 'A piece of art from the experience ART ATTACK';
		button.appendChild(img);
		button.addEventListener('click', () => toggleGalleryMode(true, img.src));
		div.appendChild(button);
		galleryAnchor.appendChild(div);
	});

	const displayModeAnchor = create('div');
	displayModeAnchor.id = 'display-mode-root';
	hideElement(displayModeAnchor);

	const closeDisplayBtn = create('button');
	closeDisplayBtn.id = 'display-close';
	closeDisplayBtn.innerText = "X";
	closeDisplayBtn.addEventListener('click', () => toggleGalleryMode(false))
	displayModeAnchor.appendChild(closeDisplayBtn);

	const displayModeImg = create('img');
	displayModeImg.id = 'display-detail';
	displayModeAnchor.appendChild(displayModeImg);
	galleryAnchor.appendChild(displayModeAnchor);

	document.body.addEventListener('keyup', evt => {
		if (evt.key.toLowerCase() === 'escape')
			toggleGalleryMode(false);
	});

	function toggleGalleryMode(show = false, img=null) {
		if (!show) {
			hideElement(displayModeAnchor);
			document.body.style.overflowY = 'scroll';
			return;
		}

		displayModeImg.src = img;
		showElement(displayModeAnchor);
		document.body.style.overflowY = 'hidden';
	}

	function hideElement(el) {
		el.style.display = 'none';
	}

	function showElement(el) {
		el.style.display = 'block';
	}
});