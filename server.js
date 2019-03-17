const express = require('express');
const fs = require('fs');
const app = express();
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

const getFileJson = async file => {
    let bufferData;

    try {
        bufferData = await readFile(file);
    } catch (e) {
        throw e;
    }

    return JSON.parse(bufferData);
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/main-menu/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/main-menu.json`));
});

app.get('/top-menu/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/top-menu.json`));
});

app.get('/brands-carousel/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/brands-carousel.json`));
});

app.get('/slider-params/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/slider-params.json`));
});

app.listen(1500);

console.log('Сервер стартовал!');