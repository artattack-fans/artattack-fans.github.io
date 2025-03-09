'use strict';

document.addEventListener('readystatechange', () => {
	const qrRef = new URLSearchParams(window.location.search).get('i');
	document.querySelector('#title').innerText = valid[qrRef].title;
	document.querySelector('#hint').innerText = valid[qrRef].hint;
});