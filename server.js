const express = require('express');
const fs = require('fs');
const app = express();
const __dirname = 'data';

const getFileJson = file => {
    let bufferData = fs.readFileSync(file);

    return JSON.parse(bufferData);
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/main-menu/', (req, res) => {
    res.json(getFileJson(`${__dirname}/main-menu.json`));
});

app.get('/top-menu/', (req, res) => {
    res.json(getFileJson(`${__dirname}/top-menu.json`));
});

app.get('/brands-carousel/', (req, res) => {
    res.json(getFileJson(`${__dirname}/brands-carousel.json`));
});

app.get('/slider-params/', (req, res) => {
    res.json(getFileJson(`${__dirname}/slider-params.json`));
});

app.listen(1500);

console.log('Сервер стартовал!');