import 'dotenv/config';

import express from 'express';
import nunjucks from 'nunjucks';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = process.env.PORT || 8080;

app.use([
    express.json(),
    express.urlencoded({extended: true}),
    express.static('public')
]);


app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/dist/govuk/assets')))

nunjucks.configure([
    "node_modules/govuk-frontend/dist",
    'views'], {
    express: app,
    autoescape: true
});

app.set('view engine', 'njk');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/signup', (req, res) => {
    res.render('signup')
})


// 404 Error Handler
app.use((req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.status(404).render('404', { requestedUrl: fullUrl });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});