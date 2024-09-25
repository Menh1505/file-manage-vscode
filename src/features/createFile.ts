import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export async function createFile() {
    const rootPath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    if (!rootPath) {
        vscode.window.showErrorMessage('Thư mục làm việc chưa được mở.');
        return;
    }

    const fileName = await vscode.window.showInputBox({
        prompt: 'Enter the file name',
        placeHolder: 'example.txt'
    });

    if (!fileName) {
        return; // User cancelled the input
    }

    const filePath = path.join(rootPath, fileName);
    fs.writeFile(filePath, '', 'utf8', (err) => {
        if (err) {
            vscode.window.showErrorMessage('Không thể tạo file.');
        } else {
            vscode.window.showInformationMessage('File đã được tạo thành công!');
        }
    });
}