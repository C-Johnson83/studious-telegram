# studious-telegram
Repository for module 13 challenge assignment - E-commerce Back End

## Description
### Introduction
Internet retail, also known as e-commerce, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products.  
In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US $2.54 trillion, according to the United Nations Conference on Trade and Development.  
E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.  

### Objective
The primary aim of this project is to build the back end for an e-commerce site. Leveraging the power of a working Express.js API and configure it to use Sequelize to interact with a MySQL database..

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation and Usage](#installation-and-usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Walkthrough Video](#walkthrough-video)

## User Story
AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies


## Acceptance Criteria  
GIVEN a functional Express.js API  
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize  
WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data  
WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database

## Installation and Usage
Must have a mysql account to use database  
To install the studious-telegram, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/C-Johnson83/studious-telegram.git
2. Change to the project directory:
    ```bash  
    cd studious-telegram  
3. Install the required dependencies using npm:  
    ```bash
    npm i  
4. Launch mysql:  
    ```bash
    mysql -u root -p  
5. When prompted, enter your password    
6. To create the database  
    ```bash
    source db/schema.sql;  
7. Exit mysql   
    ```bash
    exit;  
8. Create a .env file (this file contains sensitive information and is not included in the repository. This is why you must create your own)
    ```bash
    touch .env  
9. Enter the text editor for the .env file 
    ```bash
     nano .env
10. Include the DB_Name, DB_USER, and DB_PASSWORD with your user and password
    ```bash
     DB_NAME='ecommerce_db'  
     DB_USER='root'  or what your mysql user name is
     DB_PASSWORD='your password here'
11. Exit the editor 
    ```bash
    Ctrl + x   
12. Confirm the changes with 'Y' then press enter

13. Seed the data (load the data into the tables)
    ```bash
    npm run seed  
14. Run the following command to start the app
    ```bash
    npm start   
15. Now you can view the data in an api viewer such as Insomnia, Postman, or Apidog
 
## Features

The studious-telegram e-commerce back end, powered by Express.js and Sequelize ORM, boasts a robust server architecture facilitating seamless CRUD operations for categories, products, and tags.  
With a secure environment variable setup, the application ensures safe database connection and configuration. The dynamic API responses, integrated with Insomnia for testing, deliver formatted JSON data.  
The installation process is user-friendly, supported by schema and seed commands for easy database initialization.  
The project embraces collaboration with clear contribution guidelines, operates under the MIT License, and features a comprehensive demonstration video showcasing the application's capabilities, from MySQL database synchronization to efficient API route handling.  

## Contributing

Thank you for considering contributing to the studious-telegram project!  
To maintain the integrity of the codebase, please refrain from making direct changes to the repository.  
If you have suggestions, bug reports, or feature requests, feel free to reach out by contacting Chris at chrisj21283@gmail.com.  
We welcome contributions through thorough bug reports or feature requests via GitHub Issues.

If you have a specific improvement or feature you'd like to work on, please follow these guidelines:

1. **Fork the repository:** Click the "Fork" button on the top right of the repository page.
   
2. **Create a new branch:** Switch to a new branch to isolate your changes.
   ```bash
   git checkout -b feature-name
   ```

3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Add new feature'
   ```

4. **Push to your created branch:**
   ```bash
   git push origin feature-name
   ```

5. **Create a pull request:** Submit a pull request from your forked repository with a detailed description of your changes.

Your cooperation is appreciated, and we look forward to hearing from you!  

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]  

## Walkthrough Video
The video demo showcases how to display the data using Insomnia, but there are many alternatives.

### Demo


