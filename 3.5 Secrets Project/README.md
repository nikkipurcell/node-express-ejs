# Express + Middleware + HTML

This exercise puts all the above exercises into practice.

## Description of Exercise

Using express, we use path and url middleware to get the base project directory path. We return the index page HTML to the user. (Root page is `/`).

When a user submits a password, the backend will use a POST request and if the user is authorized the user will be sent a new page showing secrets.html content. Otherwise they will remain on the same page and have to submit another password.

The secret password is: `ILoveProgramming`

## How It Works

isAuthorized is middleware that is created (custom function) to check if the password matches the secret word above.

We use **body-parser** middleware to encode the data from the form field to be used in the forms POST request.

We are also using **path** and **url** again to get the path directory for routing url.
