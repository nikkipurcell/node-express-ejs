import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

/*
  X 1. display index.ejs html by using the app.get method for /
  X 2. Dynamic display h1 tag from get 'Enter your name below'
  X 3. .post get the req.body field data for fname and lname
  X 4. send these values to function count letters (concat)
  5. in post pass number back to h1 tag 'there are x letters in your name
*/

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', { title: 'Enter your name below' })
});

app.post("/submit", (req, res) => {
  console.log(req.body)

  const name = req.body['fName'] + req.body['lName'];
  const count = name.length

  res.render('index.ejs', { title: `There are ${count} letters in your name` })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
