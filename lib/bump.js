'use strict';

var inc = require('semver').inc;
var getVersion = require('./get-version');
var tag = require('./tag');
var logger = require('./logger');

module.exports = function(opts) {
	var message = opts.message;
	var dryRun = opts.dryRun;
	var level = opts.level;
	return getVersion()
		.then(function(version) {
			logger.verbose('current version detected as ' + version);
			if (/-dirty$/.test(version)) {
				throw new Error("You must commit any changes before making a release");
			}
			version = 'v' + inc(version, level);
			if (dryRun) {
				logger.info("If not dry run would have tagged as " + version);
				return version;
			} else {
				return tag(version, { message: message });
			}
		});
};
