# Directory Brute Forcer Chrome Extension

A Chrome extension to brute-force directories or parameters on a target website. This tool is designed for security testing and educational purposes only.

## Features
- **Wordlist Support**: Use predefined wordlists or upload your own.
- **Dynamic Loading**: Automatically loads wordlists from the `wordlists` folder.
- **Status Code Highlighting**: Color-coded results based on HTTP status codes.
- **Easy to Use**: Simple and intuitive user interface.

## Installation
1. Clone this repository or download the ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (toggle in the top-right corner).
4. Click on "Load unpacked" and select the extension folder.

## Usage
1. Open the extension by clicking on its icon in the Chrome toolbar.
2. Enter the base URL of the target website.
3. Select a wordlist from the dropdown menu or manually enter words in the textarea.
4. Click "Start" to begin the brute-forcing process.
5. View the results in the list below.

## Wordlists
The extension comes with the following wordlists:
- `js.txt`: Common JavaScript file paths.
- `Sensitive files.txt`: Sensitive files and directories.
- `Service based dir.txt`: Service-based directories.

You can add your own wordlists by placing `.txt` files in the `wordlists` folder.

## Screenshots
![Screenshot](screenshot.png) <!-- Add a screenshot if available -->

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer
This tool is intended for educational and security testing purposes only. Use it responsibly and only on systems you have permission to test. The developer is not responsible for any misuse of this tool.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Author
[Your Name](https://github.com/yourusername)
