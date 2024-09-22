# Copy to LLM from File Explorer

Easily copy code snippets or entire files directly to your favorite LLM (Large Language Model) interface from VSCode's file explorer.

## Features

- Right-click context menu option in the file explorer to copy file contents
- Automatically formats the copied text for optimal use with LLMs
- Supports multiple file types including .py, .js, .html, .css, and more
- Customizable text prefix and suffix for copied content

## Installation

1. Open Visual Studio Code
2. Press `Ctrl+P` (or `Cmd+P` on macOS) to open the Quick Open dialog
3. Type `ext install powerbruger.copy-to-llm-from-file-explorer`
4. Press Enter and click Install

## Usage

1. In the VSCode file explorer, right-click on a file
2. Select "Copy to LLM" from the context menu
3. The file contents are now in your clipboard, ready to paste into your LLM interface

You can also use the keyboard shortcut `Ctrl+Alt+C` (or `Cmd+Option+C` on macOS) when a file is selected in the explorer.

## Requirements

- Visual Studio Code version 1.60.0 or higher

## Extension Settings

This extension contributes the following settings:

* `copyToLLM.enableFormatting`: Enable/disable automatic code formatting before copying
* `copyToLLM.prefix`: Text to prepend before the copied code (e.g., "```python")
* `copyToLLM.suffix`: Text to append after the copied code (e.g., "```")

## Known Issues

- Currently does not support copying multiple files at once
- May have performance issues with very large files (>1MB)

## Release Notes

### 1.0.0

Initial release of Copy to LLM from File Explorer

- Added right-click context menu option
- Implemented basic copying functionality
- Added customizable prefix and suffix settings

---

## For more information

* [GitHub Repository](https://github.com/powerbruger/copy-to-llm-from-file-explorer)
* Developed by Power Bruger
* [VSCode Marketplace Page](https://marketplace.visualstudio.com/items?itemName=powerbruger.copy-to-llm-from-file-explorer)

**Enjoy coding and chatting with your LLM!**