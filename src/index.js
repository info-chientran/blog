import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';

const app = express();
const port = 3000;

// Connect to DB
db.connect();

// Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Public path
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
