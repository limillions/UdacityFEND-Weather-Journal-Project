# Weather Journal App Project

### Project Description

An asynchronous web app that uses Web API and user data to dynamically update the UI.

### Table of contents

- [Project Title]
- [Project Description]
- [Table of Contents]
- [Application Lang. & Dependencies]
- [API Credentials]
- [Running the App & Installation Guide]
- [Final Output]
- [License]
- [Author]
- [Footer]
 

### Application Lang. & Dependencies

* HTML, CSS and Javascript
* Node.js
* Express - *node.js web application framework*
* Body-parser - *Express middleware; to parse incoming request bodies*
* Cors - *Express middleware; for cross origin allowance*
* Dotenv - *Loads environment variables from .env file*
* Node-fetch - *A light-weight module that brings window.fetch to node.js*
[(Back to top)](#table-of-contents)

### API Credentials

* Create an user account at [OpenWeather](https://openweathermap.org/ "OpenWeather") to obtain the app ID.
* Create a file named .env with the following code and your app ID.
```
OPENWEATHER_APP_ID=your OpenWeather App ID
```
[(Back to top)](#table-of-contents)

### Running the App & Installation Guide

* Download the app zip file.
* Unzip it from the desktop.
* Install node.js - https://nodejs.org/.
* Install Express; terminal command line - `npm install express`.
* Install Body-Parser; terminal command line - `npm install body-parser`.
* Install Cors; terminal command line - `npm install cors`.
* Install Dotenv; terminal command line - `npm install dotenv`.
* Install Node-Fetch; terminal command line - `npm install node-fetch`.
* Initiate the local server; terminal command line - `node server.js`.
*Before starting the server, go to the `website/app.js` folder. On line 3,
	```
	const apiKey = '&APPID=***'
	```
	replace the `***` with the unique apiKey that was generate for you on OpenWeatherMap.

* Open terminal in the root directory and run the following command:
	```
	npm run start
	```
* The server will start on `http://localhost:9000/` in your browser.
[(Back to top)](#table-of-contents)

### Final Output

### License
[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)
[(Back to top)](#table-of-contents)

### Author

* [Ahmed Kasem](https://github.com/limillions"Ahmed Kasem")


### Footer

Udacity Weather Journal App
[(Back to top)](#table-of-contents)
