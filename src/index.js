import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Http logger
app.use(morgan('combined'));

// Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log(__dirname);


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login page</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})