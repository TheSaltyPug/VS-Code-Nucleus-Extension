// import what we need
const vscode = require('vscode');   // vscode
const fs = require('fs');           // filesystem
const path = require('path');       // path
const Extension = require('../extension'); // our extension

// Messages for ease of access
const ABORT_CREATE = 'Aborted datapack generation';
const ABORT_STRUCTURE = 'Aborted datapack generation';
const FAILED = 'Failed to generate datapack';
const SUCCESS = 'Successfully created new datapack!';

function run(uri){
    vscode.window.showInformationMessage('Datapack generation from Nucleus!');
    // // check that the path exists
    // if (uri === undefined){
    //     return vscode.window.showErrorMessage('Current path is not available');
    // }
    // let filepath = uri.fsPath;

    // // get the current directory
    // let curDir = filepath;
    // if (!fs.statSync(curDir).isDirectory()){
    //     curDir = path.dirname(filepath);
    // }

    let author;
    let dname;
    let namespace;
    let projname;
    let item;
    let desc;
    let mainName;
    let loadName;

    // input data from the user
    author = vscode.window.showInputBox({
        prompt: 'Please enter your Minecraft username:',
        // value: vscode.workspace.getConfiguration('nucleus.author'),
        // validateInput: value => {}
    })
    author.then( () => {
        dname = vscode.window.showInputBox({
            prompt: 'Please enter your datapack name:',
            // validateInput: value => {}
        })
        }
    )
    dname.then( () => {
        namespace = vscode.window.showInputBox({
            prompt: 'Please enter your datapack namespace:',
            // validateInput: value => {}
        })
        }
    )
    namespace.then( () => {
        projname = vscode.window.showInputBox({
            prompt: 'Please enter the project name:',
            // validateInput: value => {}
        })
        }
    )
    item = vscode.window.showInputBox({
        prompt: 'Please enter the id of the item that will be displayed in the advancement:',
        // validateInput: value => {}
    })
    desc = vscode.window.showInputBox({
        prompt: 'Please enter the datapack description:',
        // validateInput: value => {}
    })
    mainName = vscode.window.showInputBox({
        prompt: 'Please enter the name of the main function:',
        value: 'main',
        // validateInput: value => {}
    })
    loadName = vscode.window.showInputBox({
        prompt: 'Please enter the name of the load function:',
        value: 'setup',
        // validateInput: value => {}
    })

}

exports.run = run;