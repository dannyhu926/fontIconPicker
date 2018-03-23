module.exports = {
	verbose: true,
	testEnvironment: 'jest-environment-jsdom-global',
	'transform': {
		'^.+\\.js$': 'babel-jest'
	},
	'moduleFileExtensions': [
		'js',
		'jsx'
	],
	'modulePaths': [
		'<rootDir>/node_modules',
		'<rootDir>/src/js'
	]
};
