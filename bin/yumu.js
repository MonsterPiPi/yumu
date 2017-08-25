
var fs = require('fs');
var process = require('process');
var child_process = require('child_process');
var inquirer = require('inquirer');
var chalk = require('chalk');
var program = require('commander');
var pkg = require('../package.json');
var child_process = require('child_process');
var plugin = require('../src/plugin.js');
var addSpaceStr = require('../src/common.js').addSpaceStr;
var chalk = require('chalk');

if(!process.argv[3]) {
	program.version(pkg.version);
}
program.on('--help', function(){
	console.log('');
  console.log('  ******************' + addSpaceStr(3) + chalk.yellow('API') + addSpaceStr(3) + '******************');
  console.log('');
  console.log(chalk.yellow(addSpaceStr(20) + 'yumu init'));
  console.log(chalk.yellow(addSpaceStr(20) + 'yumu install'));
  console.log(chalk.yellow(addSpaceStr(20) + 'yumu server'));
  console.log(chalk.yellow(addSpaceStr(20) + 'yumu build'));
  console.log('');
});

program.parse(process.argv);

if(!process.argv[2]) {
	var getResult
	try {
		getResult = child_process.execSync('yumu --help', { encoding: 'utf8' });
	} catch(err) {
		console.log(err.stderr);
	}
	process.stdout.write(getResult);
	return;
}

if(plugin.commends.indexOf(process.argv[2]) < 0) {
	console.log('');
	console.log(chalk.red('  Can\'t find \'yumu '+ process.argv[2] +'\',Please ensure the right commends'));
	return;
}

plugin['handle_' + process.argv[2]]();
