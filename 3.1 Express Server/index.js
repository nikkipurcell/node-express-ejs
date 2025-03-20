import express from 'express';
// Set up a server using express. That server is going to listen to our port. Once setup, it will notify us that it is running.

// create an app from the express method.
const app = express();
const port = 3000;

// browser sends request to server to get root page, server is listening and knows how to handle the request due to the get method code below.
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Me</h1><p>Contact me for more information</p>');
});

// use the listen method (port, callback)
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// Location of server is localhost:3000
