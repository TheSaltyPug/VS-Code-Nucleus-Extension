// import what we need
const vscode = require('vscode');   // vscode
const fs = require('fs');           // filesystem
const path = require('path');       // path
const Extension = require('../extension'); // our extension
const { get } = require('http');

// Messages for ease of access
const ABORT_CREATE = 'Aborted datapack generation';
const ABORT_STRUCTURE = 'Aborted datapack generation';
const FAILED = 'Failed to generate datapack';
const SUCCESS = 'Successfully created new datapack!';

function getData(prompt, defaul="")
{
    return vscode.window.showInputBox({
        prompt: prompt,
        value: defaul
    })
}

async function run(uri){
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

    // grab some settings beforehand so we can do conditions on them
    // for example, settingNamespace is used to set the namespace to author if it is undefined
    let settingNamespace = vscode.workspace.getConfiguration('nucleus')['namespace'];
    let settingAuthor = vscode.workspace.getConfiguration('nucleus')['author'];
    let settingMainName = vscode.workspace.getConfiguration('nucleus')['mainName'];
    let settingLoadName = vscode.workspace.getConfiguration('nucleus')['loadName'];

    // TODO-- don't ask input if a setting is defined
    // input data from the user
    let author = await getData("Please enter your Minecraft username:", settingAuthor); // datapack author. Used in the global advancement
    let dname = await getData("Please enter the datapack name:"); //  datapack name. Used in global advancement, mcmeta file, and root folder
    let namespace = await getData("Please enter the namespace:", ((typeof(settingNamespace) == 'undefined') ? author : settingNamespace)); // main folder name. namespace:projname/filename
    let projname = await getData("Please enter the project name:"); // project name. namespace:projname/filename
    let item = await getData("Please enter the item id for the datapack advancement:","name_tag");   // datapack item used in the global advancement
    let desc = await getData("Please enter the datapack description:");   // datapack description. Used in global advancment and mcmeta file.
    let mainName = await getData("Please enter the name of the main function:","main"); // name of the function that is run every tick. namespace:projname/mainName
    let loadName = await getData("Please enter the name of the setup function:","setup"); // name of the function that is run on load. namespace:projname/loadName

    // start generation

}

exports.run = run;