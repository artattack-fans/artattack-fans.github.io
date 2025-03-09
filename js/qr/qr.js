'use strict';

const runSearch = () => {
	const qrRef = new URLSearchParams(window.location.search).get('i');

	console.info(qrRef);
	if (qrRef === '1')
		window.location.href = '/qr/test.html';
	else if (validQRKeys.includes(qrRef)) {
		if (valid[qrRef].href)
			window.location.href = valid[qrRef].href;
		else
			window.location.href = '/qr/hit.html?i=' + qrRef;
	} else
		window.location.href = '/qr/miss.html?i=' + qrRef;
};

runSearch();