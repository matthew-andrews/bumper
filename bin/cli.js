#!/usr/bin/env node
'use strict';

var program = require('commander');
var bump = require('../lib/bump');

program.version(require('../package.json').version);

function setUpCommand(level) {
	program
		.command(level)
		.description('bumps the ' + level + ' version')
		.option('--dry-run', 'skips the tagging')
		.option('-m --message <message>', 'add a message to the git tag')
		.action(function(opts) {
			console.log("will bump " + level);
		});
}

setUpCommand('major');
setUpCommand('minor');
setUpCommand('patch');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}
