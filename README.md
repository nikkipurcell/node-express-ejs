# Node Express EJS Practice Projects

Each folder is an exercise in backend training using Express, Node, EJS (JS templates).

They were all part of the training from Udemy class The Complete Web Development Bootcamp with Dr Angela Yu

## Backend Training

This is generally how we progressed and built on each lesson to understand how the backend works.

1. (2.2) **Native Node Modules** are provided natively in Node.js (fs, http, path)
   * We created simple file using Node and fs then read the file.
   * New files: index.js

2. (2.3) **NPM** allowed us to import 3rd party package and use it.
   * Initialized our project using npm init. Imported two third party packages.
   * New files: package.json (& lock)

3. (3.1) **Express Server** added page routing using express.
   * Set express server on port 3000.
   * Routing = app.get() app.listen()
   * Response = res.send(html tags)

4. (3.2) **HTTP Requests** similar routing for pages using express.
   * Did same steps as 3.1.
   * Just knowing you can use express for all the HTTP request methods.

5. (3.3) **Postman** tool used to test any HTTP requests.
   * Use express for HTTP request handling.
   * Creating appropriate response status code.
   * Use Postman to test those requests and ensure correct response received.
   * Routing: app.get(), app.post(), app.put(), app.patch(), app.delete()
   * Response: res.sendStatus(200), res.send(htmlTag)

6. (3.4) **Forms and Middleware**
   * Index.html has a form with a submit action and POST method.
   * Uses middleware (body-parser) to get body data sent from the form.
   * Now we use res.sendFile() to send the route for / homepage to use index.html.
   * We use native module (url and path) to create the base or root path.
   * We use morgan middleware for logging.
   * We use custom middleware function for logging. Must end with next().
   * Response: res.sendFile(), res.send(string)
   * New files: public/index.html

7. (3.5) **Multipages and Middleware**
   * Using mutiple .html files, custom middleware function.
   * Checks password match.
   * New files: public/secrets.html

8. (4.1) **EJS Tags**
   * Instead of using html pages you can use EJS templating language.
   * This allows you to pass data from your server file to the frontend.
   * EJS files end in .ejs
   * Server file sends back response data object to the front end.
   * Can send strings, dates, arrays, or even html content as data from server.
   * The EJS is used to pull in that data on the frontend. Examples below.
   * New files: /views/footer.ejs, /views/index.ejs

  ```
<!-- A value from the backend -->
<%= title %>

<!-- Logic statements -->
<% if (seconds % 2===0) { %>

<!-- Bring in HTML content -->
<%- htmlContent %>

<!-- Include another file -->
<%- include('footer.ejs') %>
  ```

9.  (4.2) **Passing Data**
    * Form on index.ejs page submits a POST request to server.
    * Server uses express app.post() and then uses middleware body-parser to get the request body data from form.
    * Can return data object to frontend.

10. (4.3) **EJS Partials**
    * Partials are files that contain part of HTML code such as header and footer.
    * Partials can be used on each page to reduce redundancy.
    * <%- include("partials/footer.ejs") %>
    * Now there is a public folder where static files live (css and images).
    * Response: res.render('about.ejs')
    * New files: /views/partials/header.ejs, /views/partials/footer.ejs about.ejs, contact.ejs
    * New files: /public/images/cat.jpeg, /public/styles/layout.css

11. (4.4) **Band Generator Project**
    * Putting all that we have learned together.
    * Uses form, middleware, and returns data to frontend.

12. (5.2) **JSON**
    * JSON file contains all the data. Array of objects.
    * can parse the JSON data using JSON.parse()
    * New file: recipe.json

13. (5.3) **Axios**
    * Now we use axios to make requests to APIs.
    * We are using 3rd party apis.
    * Use try/catch to catch errors.
    * Use async/await to return a response
    Response: res.render('index.ejs', { data: result });

14. (5.4) **API Authentication**
    * Still using axios to make requests to 3rd party.
    * 4 Get requests w/each level of authentication (noAuth, basicAuth, api key, bearer token).
    * None -> sent axios request as normal.
    * Basic -> send request with username and password `auth: { username: yourUsername, password: yourPassword}`
    * API Key -> send axios request with api key in the req url as a query param.
      * axios.get('api_url/filter?score=5&apiKey=${yourAPIKey}');
    * Bearer Token -> axios request send url, { headers: { Authorization: `Bearer ${yourBearerToken} } }

15. (5.5) **REST APIs**
    * Same as before but now calling all HTTP request methods using axios.
    * Using API documentation to know how to make the calls, provide body if needed, what expected response.
    * Using Bearer Token for a couple requests per API documentation.

16. (5.6) **Secrets Project**
    * All same server file setup (express, express.static('public'), app.get(), app.listen and axios.get()).
    * Calls made to 3rd party APIs.
    * Returning response data to front end using ejs tags.

17. (6.0) **DIY API**
    * Files: simple index.js w/ data array.
    * API requests app.get(), app.post(), app.patch(), app.put(), app.delete.
    * Modifying the data array and returning desired result to front end.
    * This is our own API setup.
    * Using: res.json(dataObject);

18. (6.1) **Blog API Project**
    * Putting it all together in a blog.
    * Client pages w/forms -> server file (routing and API requests) -> API logic page
    * API logic page makes the data modifications and returns results to server.
    * Data is in the API file called IMDB or in memory database.
