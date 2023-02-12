const express = require('express');

const app = express();

//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send('its ok');
    console.log('ok');
});

module.exports = app;