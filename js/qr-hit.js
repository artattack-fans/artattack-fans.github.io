'use strict';

document.addEventListener('readystatechange', () => {
	const qrRef = new URLSearchParams(window.location.search).get('i');
	document.querySelector('#title').innerText = validQRs[qrRef].title;
	document.querySelector('#hint').innerText = validQRs[qrRef].hint;
});