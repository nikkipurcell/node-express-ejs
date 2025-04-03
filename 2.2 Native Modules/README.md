# Native Node Modules

Some modules come bundled with Node by default.
You can use these in your projects without needing to install the packages.

## Example Native Modules

A few native modules include: (HTTP, Path, & filesystem).

- **Filesystem** = native node module that allows us to access the local storage.
- **HTTP** = allows Node.js to transfer data over HTTP.
- **Path** = provides utilities for working with file and directory paths.

## This Exercise

In this exercise, we use filesystem to create a file called message.txt. We provide some text to write on that file. We provide error handling. Then we log a message upon completion.

Then we read the file that was created and log the message created in console.

The takeaway is no package was needed to do this since filesystem is provided as a native module with Node.js

## To run the code

With the root folder in VScode, simply run `nodemon index.js` to run the file and log the content.
