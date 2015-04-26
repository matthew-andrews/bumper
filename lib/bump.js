'use strict';

var inc = require('semver').inc;
var getVersion = require('./get-version');

module.exports = function(opts) {
	var message = opts.message;
	var dryRun = opts.dryRun;
	var level = opts.level;
	return getVersion()
		.then(function(version) {
			console.log('current version detected as ', version);
			if (/-d$/.test(version)) {
				throw new Error("You must commit any changes before making a release");
			}
			version = 'v' + inc(version, level);
			console.log('will increment to', version);
		});
};
