# EJS Tags

EJS (Embedded JavaScript) is the most popular templating package that can be used in HTML. You can pass data from server back to your HTML using ejs tags. (similar to React JSX)

## How it works

If using ejs, filename extension must be .ejs. Install ejs and express.

To use ejs in HTML, wrap content in `<% ... %>`.

In your res.render(file, object) where:
- file = index.ejs
- object = { name: req.body['name'] } // the thing being sent to HTML

## In this exercise

There is an index.ejs page and a footer.ejs page.

The app.get() for the root page sends a data object to index.ejs.

Index page can then use ejs tags to pull that data into the page.

The includes() method is used in ejs to pull in the footer to the index file.
