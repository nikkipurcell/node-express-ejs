import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// this is for HTML forms and allows us to have access to request body
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post('/submit', (req, res) => {
  console.log('Received data: ' + req.body.street);
  // console.log('competed submit', res)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
