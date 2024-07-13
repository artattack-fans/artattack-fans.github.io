// U R cheating

// I don't appreciate that

// to generate new QR codes
// window.crypto.randomUUID().replaceAll('-', '').substring(0, 5)

const validQRs = {
	'1': {}, // test page
	'5a22ff': {
		title: 'Little goon',
		hint: 'find her somewhere soon'
	},

	// throw em off our trail
	'901631': { href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, // RR
	'82ad20': { href: 'https://www.youtube.com/watch?v=Tx1XIm6q4r4' }, // Puppet pals
	'2f734f': { href: 'https://www.youtube.com/watch?v=FaOSCASqLsE' }, // Undercover Boss: Starkiller Base
	'3fd476': { href: 'https://www.youtube.com/watch?v=JVho5fU3lwc' }, // jurassic park
	'53d72c': { href: 'https://www.youtube.com/watch?v=_wxU3z9VxOY' }, // Something About Zelda Tears of the Kingdom
	'3c6731': { href: 'https://www.youtube.com/watch?v=CsGYh8AacgY' }, // Charlie the unicorn
	'833170': { href: 'https://www.youtube.com/watch?v=OQaLic5SE_I' }, // K+P Substitute teacher
};

const validQRKeys = Object.keys(validQRs);