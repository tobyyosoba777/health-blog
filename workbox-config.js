module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{PNG,png,jpg,svg,html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};