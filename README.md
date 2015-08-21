#HTML_LAB

This repository aims to provide a customized html5boilerplate for quick project setup. To achieve a flawless setup a list of todo is present below:

1. Install NodeJS
2. Install NPM
3. Install Grunt Command Line Interface

After the above todo are complete, the repository is all set to perform the below tasks:

1. A package.json is included in the directory structure
2. A Gruntfile.js is included in the directory structure
3. The HTML5Boilerplate directory structure has been modified to achieve the following tasks by configuring the grunt file
	1. JS Hint all JS files
	2. Concatenate all JS files into a single file
	3. Uglifying [a.k.a minifying] JS
	4. Concatenate all SASS files into a single one
	5. Push minified CSS file to distribution folder and concatenated css files to development folder
	6. CSS Lint on pure CSS files
	7. CSS Minify on pure CSS files
	8. Autoprefix on the main css file
	9. Watch for changes on SASS and JS files and re-perform above tasks accordingly
	10. Launch a server on port 8000 and launch the application on google chrome

4. To make changes to npm packages, open package.json and change version numbers as required.
5. Delete the contents in node modules directory
6. Run the command: 'npm install' from your project root directory. And, all required modules get installed!