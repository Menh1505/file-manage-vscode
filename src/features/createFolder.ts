import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function createFolder() {
    const rootPath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    if (!rootPath) {
        vscode.window.showErrorMessage('Thư mục làm việc chưa được mở.');
        return;
    }

    const folderPath = path.join(rootPath, 'newfolder');
    if (!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath, (err) => {
            if (err) {
                vscode.window.showErrorMessage('Không thể tạo thư mục.');
            } else {
                vscode.window.showInformationMessage('Thư mục đã được tạo!');
            }
        });
    } else {
        vscode.window.showErrorMessage('Thư mục đã tồn tại!');
    }
}
