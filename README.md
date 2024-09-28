# Word Counter

A simple web application that counts the number of words, characters, and lines in a text file. Users can upload a text file, and the app will display the total number of words, non-space characters, and lines in the file.

## Features

- Upload a text file.
- Displays the file's total number of words, characters, and lines.
- User-friendly interface with minimalistic design.
- 
## Demo
![Capture](https://github.com/user-attachments/assets/5a7f96a2-ee23-405c-ad04-b76091a9736a)

## Tech Stack

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and layout, including Google Fonts integration for typography.
- **JavaScript**: This is used to process the uploaded file and count the words, characters, and lines.

## How It Works

1. The user selects a `.txt` file using the file input element.
2. JavaScript's `FileReader` API reads the file's content.
3. The file is split into lines, and the following calculations are performed:
   - Total words: Splits each line by spaces and sums the total number of words.
   - Total characters: Counts each character except for spaces.
   - Total lines: Counts the total number of non-empty lines.
4. The result is displayed on the webpage.

## Future Enhancements
1. Add drag-and-drop file upload functionality.
2. Display error messages for unsupported file types.
3. Improve file size handling for larger text files.

