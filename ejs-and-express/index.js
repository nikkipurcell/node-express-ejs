import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
let todayMessage;


function dayOfWeek(req, res, next) {
  if (day === 0 || day === 6) {
    todayMessage = 'Its the weekend, its time to have fun!'
  } else {
    todayMessage = 'Its a weekday, its time to work hard!'
  }
  next();
}

app.use(dayOfWeek);

app.get('/', (req, res) => {
  res.render('index.ejs', { message: todayMessage });
})

app.listen(port, (req, res) => {
  console.log(`Listening  on port ${port}`);
});
