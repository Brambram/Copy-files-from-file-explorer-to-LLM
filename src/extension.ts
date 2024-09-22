import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyFormattedFiles', async () => {
        // Get the current workspace folder
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder is open');
            return;
        }

        const files = await vscode.window.showOpenDialog({
            canSelectMany: true,
            openLabel: 'Select Files to Copy',
            defaultUri: workspaceFolder.uri // Set the default directory to the current workspace
        });

        if (!files) return;

        let formattedContent = '';

        for (const file of files) {
            const content = fs.readFileSync(file.fsPath, 'utf8');
            const fileName = path.basename(file.fsPath);
            formattedContent += `File: ${fileName}\n\`\`\`\n${content}\n\`\`\`\n\n`;
        }

        vscode.env.clipboard.writeText(formattedContent);
        vscode.window.showInformationMessage('Formatted code copied to clipboard!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}