# CS348 Group Project by Laurelwood-Erb (PG13)

## Requirements
- You need followings installed in your device
  1. `npm` (Essentially `Node.js`)
  2. `MySQL`, which can be downloaded <a href="https://dev.mysql.com/downloads/mysql/">here</a>

<br>

## Running Our Application
<u>**Please follow these steps carefully**</u>

1. Clone our repository - either `$ git clone` or simply download
2. Install necessary packages for *backend* and start its application
   1. Move to `./backend` and execute this command
        ```
        $ npm i
        ```
   2. Execute following commands one by one to create and populate tables and data
        ```
        $ node script/tables
        $ node script/populate
        ```
    3. Start the back-end server by executing this command
        ```
        $ node app.js
        ```
3. Repeat step2 similarily for *frontend*
   1. Move to `./frontend` and execute this command
        ```
        $ npm i
        ```
   2. Execute following command
        ```
        $ npm run start
        ```
    3. The application will automatically run at <a href="http://localhost:3000 ">http://localhost:3000</a>. \
     If not, open a browser of your choice and open connect to above link
    
<br>

## Create and Load Sample DataBase
- As quickly mentioned in step 2.2, our database is loaded and created by running those two "script" files
- `./script/tables.js` will be responsible for creating necessary tables
- `./script/populate.js` will be acting as a script which takes in `.csv` files to populate appropriate data for `MySQL` 

<br>

## Features Supported

Following is the list of features that we are currently supporting
-  *How many countries does this airline operate in?*
   -  By "operate", we mean that airlines who have route arriving/leaving a country
   -  Our feature will count number of countries that an airline operates

