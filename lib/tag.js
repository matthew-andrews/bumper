'use strict';

var exec = require('./exec');
var logger = require('./logger');

module.exports = function(annotation, opts) {
	var command = 'git tag ' + annotation;
	var message = opts.message;
	if (message) {
		command += ' -m "' + message + '"';
	}
	logger.verbose("Will run git command:" + command);
	return exec(command)
		.then(function() {
			logger.verbose("Tagged as " + annotation);
			return annotation;
		})
		.catch(function(err) {
			throw new Error("Could not create tag", err);
		});
};
