# Note Taker

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
This is a simple note taking app that records notes for the user to reference at any time.

## Installation
1.  Navigate to the GitHub repository ( https://github.com/nystphens/note-taker ) in your web browser and click the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.  

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new file titled “readme-generator” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and is necessary  modules will not be cloned to your repository.  Please continue reading the instructions to find out how to install these modules on your computer. 

4.  Since this application uses Node.js you will have to install Node and the required Node modules to operate it.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the index.js file in your terminal.  For quick access you can right click index.js in VS Code and click the option “Open in Integrated Terminal”.  

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  This app requires three npm packages that are listed as dependancies: "morgan", "express", and "generateUniqueId".  If these packages were not installed initially then you can install them by running the command: "npm install morgan express generateUniqueId".  

8.  Once you have cloned the repository and downloaded Node.js and its necessary modules you are ready to use Note Taker!

## Usage
To use this app from any device you can navigate to the deployed app on Heroku.  The url for the deployed application is ( https://powerful-river-74307.herokuapp.com/ ).  To enter a note first click the pen icon to start a new note.  Click the note title textarea and enter your title then click the note text textarea below and enter your note text content.  To save your note click the save icon in the top right.  Your note will appear along the list of save notes on the left hand column.  To access previous notes click the saved note in the left hand column to view them in full.  Delete and edit functionality still in process. 

To run the server locally on your device first see the [Installation](#installation) section for instructions on how to download and install this repository and its files.  Navigate to the root directory in your terminal and run the command "npm start".  This will set up the terminal on path 3001 and you will be able to access the app from the url "localhost:3001/".  

## License
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
[MIT license](https://opensource.org/licenses/MIT)
Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
If you wish to contribute to this project first read the steps listed above for installation and use.  Then you may make changes or develop new features as you see fit.  I am currently working on the optional "delete" feature.  Work on this feature  can be found by accessing the "feature/delete" branch for this repository.

## Tests
To test this app you can reference the db.json file in the "db" folder of the repository to check that your notes are being saved and updated accordingly.  This file houses all the notes data.  

## Questions
For questions or concerns regarding this project or future collaborations please contact the author via GitHub at:
https://github.com/nystephens
