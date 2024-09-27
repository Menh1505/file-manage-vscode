// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
/**
 * Imports the `createFile` function from the `./features/createFile` module.
 */
import { createFile } from './features/createFile';
import { deleteFile } from './features/deleteFile';
import { createFolder } from './features/createFolder';
import { showWebview } from './features/showWebview';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {

  /**
  * Registers three commands:
  * - 'extension.createFile' - Executes the `createFile` function when the command is invoked.
  * - 'extension.deleteFile' - Executes the `deleteFile` function when the command is invoked.
  * - 'extension.createFolder' - Executes the `createFolder` function when the command is invoked.
  * These commands are added to the extension's subscriptions, which ensures they are properly disposed of when the extension is deactivated.
  */
  const createFileCommand = vscode.commands.registerCommand('filesManager.createFile', () => { createFile(); });
  let deleteFileCommand = vscode.commands.registerCommand('filesManager.deleteFile', deleteFile);
  let createFolderCommand = vscode.commands.registerCommand('filesManager.createFolder', createFolder);

  /**
   * Adds the registered commands to the extension's subscriptions, ensuring they are properly disposed of when the extension is deactivated.
   */
  context.subscriptions.push(createFileCommand);
  context.subscriptions.push(deleteFileCommand);
  context.subscriptions.push(createFolderCommand);

  context.subscriptions.push(
    vscode.commands.registerCommand('filesManager.showWebview', showWebview));
}
// This method is called when your extension is deactivated
export function deactivate() { }
