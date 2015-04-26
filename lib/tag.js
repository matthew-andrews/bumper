'use strict';

var exec = require('./exec');
var logger = require('./logger');

module.exports = function(annotation, opts) {
	var message = opts.message;
	var command = 'git tag -a ' + annotation + (message ? ' -m "' + message + '"' : '');
	return exec(command)
		.then(function() {
			logger.verbose("Tagged as " + annotation);
		})
		.catch(function(err) {
			throw new Error("Could not create tag", err);
		});
};

