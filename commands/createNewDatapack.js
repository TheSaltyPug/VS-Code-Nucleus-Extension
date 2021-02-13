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

    let author; // datapack author. Used in the global advancement
    let dname; //  datapack name. Used in global advancement, mcmeta file, and root folder
    let namespace; // main folder name. namespace:projname/filename
    let projname; // project name. namespace:projname/filename
    let item;   // datapack item used in the global advancement
    let desc;   // datapack description. Used in global advancment and mcmeta file.
    let mainName; // name of the function that is run every tick. namespace:projname/mainName
    let loadName; // name of the function that is run on load. namespace:projname/loadName

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
    projname.then( () => {
        item = vscode.window.showInputBox({
           prompt: 'Please enter the id of the item that will be displayed in the advancement:',
           // validateInput: value => {}
        })
        }
    )
    item.then(() => {
        desc = vscode.window.showInputBox({
            prompt: 'Please enter the datapack description:',
           // validateInput: value => {}
        })
        }
    )
    desc.then(() => {
        mainName = vscode.window.showInputBox({
            prompt: 'Please enter the name of the main function:',
            value: 'main',
            // validateInput: value => {}
        })
        }
    )
    mainName.then( () => {
        loadName = vscode.window.showInputBox({
            prompt: 'Please enter the name of the load function:',
            value: 'setup',
            // validateInput: value => {}
        })
        }
    )

    // start generation
    loadName.then( () => {
        //
        console.log("stuff");

    })

}

exports.run = run;