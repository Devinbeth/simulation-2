require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const checkForSession = require('./middlewares/checkForSession.js');
const auth_controller = require('./controllers/auth_controller.js');
const prop_controller = require('./controllers/prop_controller.js');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => checkForSession(req, res, next));

const port = 3005;
massive(process.env.connection_string).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
});

// AUTHORIZATION ENDPOINTS
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/logout', auth_controller.logout);

// PROPERTIES ENDPOINTS
app.get('/api/properties', prop_controller.read);
app.post('/api/properties', prop_controller.create);
app.delete('/api/properties/:id',prop_controller.delete);
