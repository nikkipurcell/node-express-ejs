# REST APIs

This demo is to practice creating custom APIs for get, post, put, patch and delete.

## To Run
- Run `npm i` to install node modules.
- Run `nodemon index.js` to start the server.
- Use Postman to send server requests to test each of the APIs created in the index.js file.

## Our default data.

- Create an express server.
- Next we set the API key that will be submitted to the server in the delete all exercise.
- We have a jokes array for data in the server file. The apis will be used to access or modify this array.

## The APIs

Use the following API documentation for what we intend to build: https://documenter.getpostman.com/view/6048123/2s9XxsTv8Y#dde1eab8-b2c0-4296-a2ee-12b969601430

**GET**
- GET random joke
  - We create random index number to use for the jokes array.
- GET specific joke
  - We use the request params in the url for the provided id number
  - We use the .find() method on the array to return the requested joke by id
  - We return the joke using res.json();
- GET filtered joke by type
  - We get the req.query.type from the request to server.
  - We use filter method to find all jokes in the array by type
  - Return those to the client

**POST**
- Used this to create a new joke and add to the array.
- Provide body parameters text and type with values in the request.
- Joke ID is incremented from the total length of the array.
- Use that object and push it into the array.

**PUT**
- completely replace a joke
- Get joke id from url parameter (parseInt(req.params.id)) and convert to integer
- Find joke index using findIndex method.
- Use that index with array in bracket notation to set to the new value found.
- Return that to the client.

**PATCH**
- Get the id from url.
- Use find method to get the joke object
- Construct an object with the id.
  - Check to see if the text param is sent, if yes use it in obj (change), if not use found joke text (no change).
  - Check to see if the type param is sent, if yes use it in obj (change), if not use found joke type (no change).
- Set the jokes with specified id to the new object.
- Return replacedJoke to client.

**DELETE**
- A joke
  - Get the id from params
  - Find index of joke with that id.
  - Use splice to remove that joke .splice(indexFound, 1) will remove only that one.
  - Return status of 200.
  - Use else statement to return 400 if joke not found and delete not perfomed
- All jokes
  - Get the req.query.key sent to server in url for api key.
  - We compare it to our master key value.
  - If it matches then empty the entire array. Send back 200 response
  - If not send back error message and 400 response in obj to client so UI can use that error.
