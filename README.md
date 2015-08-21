#HTML_LAB

#TODO for NPM
This repository aims to provide a customized html5boilerplate for quick project setup. To achieve a flawless setup a list of todo is present below:

1. Install NodeJS
2. Install NPM
3. Install Grunt Command Line Interface
4. Clone the repository to your local machine and remove git references

After the above todo are complete, the repository holds the below stated files and functionality at minimal level:

1. A package.json file is included in the directory structure
2. A bower.json file is included in the directory structure
3. A Gruntfile.js is included in the directory structure
4. The HTML5Boilerplate directory structure has been modified to achieve the following tasks by configuring the grunt file
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

5. To make changes to npm packages, open package.json and change version numbers as required.
6. Run the command: 'sudo npm install' from your project root directory. And, all required npm packags get installed!
7. To make changes to bower packages, open bower.json and change version numbers as required.
8. Run the command: 'bower install' from your project root directory. And, all required bower packags get installed!
9. The directory structure currently includes the below bower components:
	1. JQuery
	2. Twitter Bootstrap SASS files into SASS structure in the project

#Upcoming Features, TODO
	1. Include testing framework through bower
	2. Include image optimization packages through NPM
	3. Empty Node Modules and Bower Components directories
	4. Make alias to access project root directory and to use absolute urls in imports

#HASSLE FREE SET UP
	1. Open command line and be present in a directory where you want to set up your project.
	2. Run the command: git clone https://github.com/aditya-kappagantula/html_lab.git
	3. Git will clone the project into a folder named: html_lab
	4. Rename all references of html_lab to your required project name.
	5. Delete .git files
	6. Install Node JS
	7. Install NPM [Node package manager]
	8. Install Grunt Command Line Interface
	9. Run the command: sudo npm install
	10. Run the command: bower install

==========
Thank you!
Aditya Kappagantula.