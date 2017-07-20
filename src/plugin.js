
exports.commends = ['init', 'install', 'server', 'build'];

exports.handle_init = function() {
	var yumuInit = require('yumu-init');
	var url = yumuInit.url;
	if(process.argv[3]) {
		var options = yumuInit.options;
		var action = yumuInit.action;
		var version = yumuInit.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuInit.init(url);
	}
}

exports.handle_install = function (){
	var yumuInstall = require('yumu-install');
	if(process.argv[3]) {
		var options = yumuInstall.options;
		var action = yumuInstall.action;
		var version = yumuInstall.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuInstall.init();
	}
}

exports.handle_server = function() {
	var yumuServer = require('yumu-server');
	if(process.argv[3]) {
		var options = yumuServer.options;
		var action = yumuServer.action;
		var version = yumuServer.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuServer.init();
	}
}

exports.handle_build = function() {
	var yumuBuild = require('yumu-build');
	if(process.argv[3]) {
		var options = yumuBuild.options;
		var action = yumuBuild.action;
		var version = yumuBuild.pkg.version;
		var isGetRight = false;
		for(var i = 0; i < options.length; i ++ ) {
			if (process.argv[3] == options[i][0] || process.argv[3] == options[i][1]) {
				var opt = /\-*(.*)/.exec(options[i][1])[1];
				action(opt, version);
				isGetRight = true;
				return;
			}
		}
		if (!isGetRight) {
			console.log(chalk.yellow('  Please ensure the right commend'));
			console.log('');
			action('help');
		}
	} else {
		yumuBuild.init();
	}
}
