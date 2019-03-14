const express = require('express');
const fs = require('fs');
const app = express();

const getFileJson = file => {
    let bufferData = fs.readFileSync(file);

    return JSON.parse(bufferData);
};

app.get('/main-menu/', (req, res) => {
    res.json(getFileJson('data/main-menu.json'));
});

app.get('/top-menu/', (req, res) => {
    res.json(getFileJson('data/top-menu.json'));
});

app.get('/brands-carousel/', (req, res) => {
    res.json(getFileJson('data/brands-carousel.json'));
});

app.get('/slider-params/', (req, res) => {
    res.json(getFileJson('data/slider-params.json'));
});

app.listen(1000);

console.log('Сервер стартовал!');