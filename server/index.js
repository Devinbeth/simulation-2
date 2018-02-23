require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const auth_ctrl = require('./auth_controller.js');
const prop_ctrl = require('./properties_controller.js');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// AUTHORIZATION ENDPOINTS
app.post('/api/auth/register', auth_ctrl.register);
app.post('/api/auth/login', auth_ctrl.login);
app.post('/api/auth/logout', auth_ctrl.logout);

// PROPERTIES ENDPOINTS
app.post('/api/properties', prop_ctrl.create);
app.get('/api/properties', prop_ctrl.read);
app.delete('/api/properties/:id', prop_ctrl.delete);

const port = 3005;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
