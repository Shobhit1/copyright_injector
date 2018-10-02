'use strict';
import * as vscode from 'vscode';
import * as fs from 'fs';
import { getText, isTargetFile } from './helper';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "copyright-injector" is now active!');

    let disposableInjectInAll = vscode.commands.registerCommand('copyright.injectAllFiles', () => {
        // Get target files, taking filepaths to ignore into account.
        getAllFiles().then(function (targetFiles: any) {
            for (var i = 0; i < targetFiles.length; i++) {
                addHeaderCopyright(targetFiles[i]);
            }

            // Display a message box to the user.
            vscode.window.showInformationMessage(
                'Successfully Injected Copyright Information in all files.'
            );
        });
    });

    let disposableInjectInCurrentFile = vscode.commands.registerCommand('copyright.currentFile', () => {

        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage(
                "No file open!"
            );
            return;
        }

        // Get current file and check if it's supported.
        const currentFile = editor.document;
        const { languageId } = currentFile;

        const companyInformation: any  = vscode.workspace.getConfiguration('copyrightInfo').get('company');
        const copyrightText = getText(companyInformation, languageId);

        if (!copyrightText) {
            vscode.window.showInformationMessage('Unsupported File');
            return;
        }

        editor.edit((textEdit) => {
            textEdit.insert(currentFile.positionAt(0), copyrightText);
        });

        vscode.window.showInformationMessage('Done.');
    });

    context.subscriptions.push(disposableInjectInAll);
    context.subscriptions.push(disposableInjectInCurrentFile);
}

const getAllFiles = () => {
    const ignoreConfig: string | undefined = vscode.workspace.getConfiguration('copyrightInfo').get('ignore');

    const matchFilesPattern: string | undefined = vscode.workspace.getConfiguration('copyrightInfo').get('matchPattern') || '/*.txt';
    let folderToBeIgnored = (ignoreConfig || "").split(',').map((term: string) => term.trim());
    console.log(folderToBeIgnored);
    if (folderToBeIgnored.length === 1 && folderToBeIgnored[0] === '') {
        folderToBeIgnored = [];
    }

    // Get all files in workspace.
    const defer = new Promise((resolve, reject) => {
        vscode.workspace.findFiles(matchFilesPattern).then((workspaceFiles) => {
            const targetFiles = workspaceFiles.filter(isTargetFile(folderToBeIgnored));
            resolve(targetFiles);
        });
    });
    return defer;
};


const addHeaderCopyright = (fileInfo: any) => {
    vscode.workspace.openTextDocument(fileInfo.path).then(
        (file: any) => {
            const { languageId } = file;

            const companyInformation: any  = vscode.workspace.getConfiguration('copyrightInfo').get('company');
            const copyrightText = getText(companyInformation, languageId);

            console.log(copyrightText);
            if (!copyrightText) {
                return;
            }

            var truePath = fileInfo.path.substr(1);

            // Open file, add license, save file.
            try {
                var data = fs.readFileSync(truePath, 'utf8').toString();
                var fd = fs.openSync(truePath, 'w+');
                var buffer = new Buffer(copyrightText + data);
                fs.writeSync(fd, buffer, 0, buffer.length);
                fs.close(fd, (e) => { console.warn('close', e); });
            } catch (error) {
                console.log('================', error);
            }

        }
    );
};

// this method is called when your extension is deactivated
export function deactivate() {
}