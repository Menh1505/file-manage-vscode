import * as vscode from 'vscode';

export function showWebview() {
    // Tạo một WebviewPanel
    const panel = vscode.window.createWebviewPanel(
        'webview',
        'Sample Webview',
        vscode.ViewColumn.One,
        {
            enableScripts: true, // Cho phép script nếu cần
        }
    );

    // Thiết lập nội dung HTML cho webview
    panel.webview.html = getWebviewContent();
}

function getWebviewContent(): string {
    // Nội dung HTML cơ bản cho webview
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Webview Example</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: blue; }
            </style>
        </head>
        <body>
            <h1>Hello from the Webview</h1>
            <p>This is a sample webview for your VSCode extension.</p>
        </body>
        </html>`;
}