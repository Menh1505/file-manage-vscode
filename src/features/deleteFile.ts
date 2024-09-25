import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function deleteFile() {
    const rootPath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    if (!rootPath) {
        vscode.window.showErrorMessage('Thư mục làm việc chưa được mở.');
        return;
    }

    const filePath = path.join(rootPath, 'newfile.txt');
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                vscode.window.showErrorMessage('Không thể xóa file.');
            } else {
                vscode.window.showInformationMessage('File đã bị xóa!');
            }
        });
    } else {
        vscode.window.showErrorMessage('File không tồn tại!');
    }
}
