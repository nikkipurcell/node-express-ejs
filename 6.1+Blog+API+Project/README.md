# 6.1 Blog API Project

Now instead of storing an array of data in a single .js file we abstract the API logic and data storage to it's own file separate from the routing logic.

## How it works

  CLIENT --request 1--> SERVER --request 2--> API LOGIC + DATA STORAGE (IMDB)

1. The client view either makes request like a post or just asks for routing for that page  to possibly access some data to be rendered on the page. (/views/index.ejs)
2. Server file runs on Port 3000 (server.js).
3. Server file uses express to handle routing for each page using app.get(). This is where the next request happens to the API gateway.
4. Server file uses try catch method and async/await inside the express methods to request data or changes from the API gateway.
5. API_URL file runs on Port 4000 and handles the logic for the API requests to send back response data to the server.
6. The API_URL file acts like how a 3rd party that we make requests to. It will receive request and then using express to follow instructions to return response if authorized.
7. It also acts as a in memory database (IMDB) for the posts array (index.js). Storage happens on the computers main memory (RAM). If power goes out or system restarted the data changes are lost.

Redis and Memcached are other examples of open source in memory data structures.
