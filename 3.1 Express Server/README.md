# Express Server

Express framework is often used with Node.js to help simplify code. It allows you to use your local computer as a server for creating and testing applications.

## Creating An Express Server

Steps include:

- Install Node.js
- Create a directory and an index.js file
- Initialize npm by running `npm init`
- Install the express package: `npm i express`
- Write your server application in index.js file.
- Start your server: `nodemon index.js`

## Server Application

In your index.js file you will:

- Import express
- Assign instance of express server to a variable named app.
- Define a port (3000)
- Now use app.get() to define routing:
  - Provide base page routing '/' for homepage, '/about' for about page.
  - Provide request and response object
  - Response object has .send() method to send HTML to the page.
- Use app.listen() to listen for changes to the port and log port to the console so you know the server is running.

## To find avaialble ports

Usually you will use port 3000 but if you need to find another use:

`sudo lsof -i -P -n | grep LISTEN`
