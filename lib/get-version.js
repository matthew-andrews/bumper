'use strict';

var exec = require('./exec');

module.exports = function() {
	return exec('git describe --tags --always --abbrev=1 --dirty=-d')
		.then(function(version) {
			return version.trim();
		})
		.catch(function(err) {
			throw new Error("Could not get git version", err);
		});
};
