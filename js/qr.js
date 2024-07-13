'use strict';

const runSearch = () => {
	const qrRef = new URLSearchParams(window.location.search).get('i');

	console.info(qrRef);
	if (qrRef === '1')
		window.location.href = 'qrh/test.html';
	else if (validQRKeys.includes(qrRef)) {
		if (validQRs[qrRef].href)
			window.location.href = validQRs[qrRef].href;
		else
			window.location.href = 'qrh/hit.html?i=' + qrRef;
	} else
		window.location.href = 'qr-fail.html';
};

runSearch();