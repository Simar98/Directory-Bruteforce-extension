# Directory Brute Forcer Chrome Extension

A Chrome extension to brute-force directories or parameters on a target website. This tool is designed for security testing and educational purposes only.

## Features
- **Wordlist Support**: Use predefined wordlists or upload your own.
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
- `common.txt`: Common JavaScript file paths.
- `directories.txt`: Sensitive files and directories.
- `custom.txt`: Service-based directories.

You can add your own wordlists by placing `.txt` files in the `wordlists` folder.

## Adding Your Own Wordlists
If you want to add your own wordlists, follow these steps:
1. Open the extension folder on your computer.
2. Navigate to the wordlists folder.
3. Add your custom .txt files to this folder. Each file should contain one word or path per line.
4. Open the popup.js file in a text editor.
5. Locate the fetchWordlists function, which looks like this:

  async function fetchWordlists() {
    return ["common.txt", "directories.txt", "custom.txt"];
  }
  
6. Add the name of your new wordlist file to the array. For example, if you added a file named my_wordlist.txt, update the function like this:

  async function fetchWordlists() {
    return ["common.txt", "directories.txt", "custom.txt", "my_wordlist.txt"];
  }

7. Save the popup.js file.
8. Reload the extension in Chrome by going to chrome://extensions/ and clicking the "Reload" button on the extension card.
9. Your custom wordlists will now appear in the dropdown menu inside the extension.



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer
This tool is intended for educational and security testing purposes only. Use it responsibly and only on systems you have permission to test. The developer is not responsible for any misuse of this tool.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Author
Simar Randhawa

