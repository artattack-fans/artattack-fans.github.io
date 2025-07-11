'use strict';

document.addEventListener('readystatechange', () => {
	const qrRef = new URLSearchParams(window.location.search).get('i');
	document.querySelector('#title').innerText = valid[qrRef].title;
	if (valid[qrRef].hint)
		document.querySelector('#hint').innerText = valid[qrRef].hint;
	else if (valid[qrRef].htmlHint)
		document.querySelector('#hint').innerHTML = valid[qrRef].htmlHint;
});