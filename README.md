# Word Counter

A simple web application that counts the number of words, characters, and lines in a text file. Users can upload a text file, and the app will display the total number of words, non-space characters, and lines in the file.

## Features

- Upload a text file.
- Displays the total number of words, characters, and lines in the file.
- User-friendly interface with minimalistic design.

## Tech Stack

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and layout, including Google Fonts integration for typography.
- **JavaScript**: For processing the uploaded file and counting the words, characters, and lines.

## How It Works

1. The user selects a `.txt` file using the file input element.
2. JavaScript's `FileReader` API reads the content of the file.
3. The file is split into lines, and the following calculations are performed:
   - Total words: Splits each line by spaces and sums the total number of words.
   - Total characters: Counts each character except for spaces.
   - Total lines: Counts the total number of non-empty lines.
4. The result is displayed on the webpage.

## Setup Instructions
1. Clone the repository
2. Open index.html in your browser to use the application

## File Structure

├── index.html       # Main HTML file with the structure of the webpage
├── script.js        # JavaScript file for handling file upload and counting logic
└── style.css 
