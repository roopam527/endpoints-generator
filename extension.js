

const vscode = require('vscode');
const path = require('path');
const fs = require('fs');




/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;
   var currentlyOpenTabfileName = path.basename(currentlyOpenTabfilePath);
	currentlyOpenTabfilePath = currentlyOpenTabfilePath.split('\\')

   currentlyOpenTabfilePath.pop();
   currentlyOpenTabfilePath = currentlyOpenTabfilePath.join('\\');
   filePath = path.join(currentlyOpenTabfilePath, currentlyOpenTabfileName);
   let length = 0;

   fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
		length += data.match(/.get\(/g) ? data.match(/.get\(/g).length : 0
		
		length += data.match(/.post\(/g) ? data.match(/.post\(/g).length : 0
		length += data.match(/.put\(/g) ? data.match(/.put\(/g).length : 0
		length += data.match(/.patch\(/g) ? data.match(/.patch\(/g).length : 0
		length += data.match(/.delete\(/g) ? data.match(/.delete\(/g).length : 0
		length += data.match(/.copy\(/g) ? data.match(/.copy\(/g).length : 0
		length += data.match(/.head\(/g) ? data.match(/.head\(/g).length : 0
		length += data.match(/.options\(/g) ? data.match(/.options\(/g).length : 0
		length += data.match(/.link\(/g) ? data.match(/.link\(/g).length : 0
		length += data.match(/.unlink\(/g) ? data.match(/.unlink\(/g).length : 0
		length += data.match(/.purge\(/g) ? data.match(/.purge\(/g).length : 0 
		length += data.match(/.lock\(/g) ? data.match(/.lock\(/g).length : 0
		length += data.match(/.unlock\(/g) ? data.match(/.unlock\(/g).length : 0

		vscode.window.showInformationMessage("No.of routes in this file is "+length);
		console.log(length)
	
	} else {
        console.log(err);
    }
})

//3ku2c3zycldqz3l64rdsf5afmtukoxtqkrpsgtrftq5rduqa5a3q
	
	
	console.log('Congratulations, your extension "endpoint-generator" is now active!');

	
	
	
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		
	
		
		//vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;


function deactivate() {
	console.log("deactivate")
}

module.exports = {
	activate,
	deactivate
}
