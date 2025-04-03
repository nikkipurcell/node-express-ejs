#  Middleware

This is used to modify data before being sent to the server.

## Types of middleware

Include:
- Pre-processing (body-parser)
- authentication
- error handling
- logging (morgan)
- Custom (you can create your own)

## In this exercise

There are four exercises that practice using middleware and custom middleware.

## Example of middleware

Form elements inputs usually need to be parsed before being sent to a server using an HTTP request.

Below is an example of a form in HTML.

```
<form action="/login" method="POST">
	<label for="email">Email</label>
	<input type="text" name="email" required/>
	<label for="password">Password</label>
	<input type="text" name="password" required/>
	<input type="submit" name="submit" />
</form>
```

If you want to render this form from the index.html page when a user visits the root path do the following. You will use the packages (path & url) to establish the directory name to be used in your url path.

```
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
	// returns /Users/nikkipurcell/Desktop/3.4 Middleware/public/index.html
  console.log(__dirname + "/public/index.html");
  // will send the file as response when user visits localhost or root page.
  res.sendFile(__dirname + '/public/index.html');
});
```

The sendFile() method on response tells server to send index.html file to your browser.

You can use res.redirect('/') if you want to redirect a user to a url.

**Body-parser** is another middleware that allows you to parse data collected from form fields in HTML before being sent to the server.

## Custom Middleware

Create a custom middleware function in index.js file.

Make sure to include req, res, and next function as parameters in the function. Next goes to next server function or the next piece of middleware if it exists.

Middleware must be placed in the order of execution.

```
// Example of custom middleware to log information for a request.
function logger(req, res, mext) {
	console.log('Request method', req.method);
	console.log('Request URL', req.url);
	next();
}
```

Use it with the express use() method.

```
// here's where we use the middleware, then it will go to next process
// which could be the get handler for the root page.
app.use(logger);
```
