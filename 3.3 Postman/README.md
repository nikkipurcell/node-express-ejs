# Using POSTMAN

Postman can be used to test HTTP requests.

## This Exercise

In this exercise we create a Express server and set up some HTTP requests handling for (GET, POST, PUT, PATCH, DELETE). When a user hits those requests, using POSTMAN, we send back a status code in the response.

## Run This Exercise

To run this exercise, run `nodemon index.js` to start the server first. Then use Postman to test the following urls:

- `/` GET - should return h1 tag Homepage
- `/register` POST - returns 201 status code
- `/user/angela` PUT - returns 200 status code
- `/user/angela` PATCH - returns 200 status code
- `/user/angela` DELETE - returns 200 status code
