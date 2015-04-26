#!/usr/bin/env node
'use strict';

require('es6-promise').polyfill();
var program = require('commander');
var bump = require('../lib/bump');
var logger = require('../lib/logger');

program.version(require('../package.json').version);

function setUpCommand(level) {
	program
		.command(level)
		.description('bumps the ' + level + ' version')
		.option('--dry-run', 'skips the tagging')
		.option('-m --message <message>', 'add a message to the git tag')
		.option('-v --verbose', 'show extended debug output')
		.action(function(opts) {
			if (opts.verbose) {
				logger.setLevel('verbose');
			}
			bump({
				level: level,
				message: opts.message,
				dryRun: opts.dryRun
			})
				.catch(function(err) {
					logger.error(err);
					process.exit(1);
				});
		});
}


['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease']
	.forEach(function(command) { setUpCommand(command); });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}
