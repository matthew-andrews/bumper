'use strict';

var exec = require('./exec');

module.exports = function(annotation, opts) {
	var message = opts.message;
	return exec('git tag -a ' + annotation + (message ? ' -m "' + message + '"' : ''))
		.then(function() {
			logger.verbose("Tagged as " + annotation);
		})
		.catch(function(err) {
			throw new Error("Could not create tag", err);
		});
};

