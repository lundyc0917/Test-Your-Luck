
# Test_Your-Luck

  # Test Your Luck! 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   

  ## Description

  This application is for all the sports betters lovers out there. This application will allow you to place bets between two teams using an API which will be stored in the database as well as your current balance, bet amount and new amount.

  :round_pushpin: [Click here to navigate to deployed app on Heroku!](https://.herokuapp.com) :round_pushpin:
  
  ## Table of Contents
  
  * [Demonstration](#demonstration)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Collaboration](#collaboration)
  * [Technologies](#technologies)
 

 ## Demonstration
  ![](./public/assets/img/)


  ## Features

  - The `config` folder houses the two javascript files:
    - `connection.js` code to connect node to MySQL.
    - `orm.js` which contains the methods used in order to retrieve and store data in the database.  
  - The public folder contains the css and images files that represent the front-end.
  - The `db` folder contains the MySQL files including: 
    * `schema.sql` which contain the SQL queries.
    * `seeds.sql` can contain a few starter burgers to populate the database with options.
  
  ### Directory Structure

   
  ## Installation

  The following dependencies are required to be installed for this application to run properly:
      
      npm i
      npm install express
      npm install express-handlebars
      npm install mysql
      npm install dotenv


  ## Usage

  Once all dependencies have been installed, users should run the following command in the terminal:

     `node server.js` 

  This command and will instruct the app to begin listening on the `LocalHost: PORT`. This will then instruct users to either `Cmd + Click` for Mac users or  `Ctrl + Click` on Windows which will open the browser with the following address or to enter the following in the web browser to deploy the application locally.               

    `localhost:8080`. 
  
  A deployed link is provided for this specific project through Heroku.


  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  This application is licensed under the MIT License. 


  ## Collaboration

  This project was creating with collaboration from:
  * [Jerquanus Swan](https://github.com/Jerquanus)
  * [Austin Cochran](https://github.com/Austinc12)
  * [Cam Lundy](https://github.com/lundyc0917)
  * [Nicole Catapano](https://github.com/nsc9605)

    
  ## Technologies
  
  * [Node.js](https://nodejs.org/en/)  
  * [Express.js](https://expressjs.com/)
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [MySQL](https://dev.mysql.com/)
  * [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
  * [Dotenv](https://www.npmjs.com/package/dotenv)
  * [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
  * [Visual Studio Code](https://code.visualstudio.com/)
  * Terminal / Git Bash
    
 
