const express = require('express');
const fs = require('fs');
const app = express();

const getFileJson = file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(data));
      });
    });
  };

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/main-menu/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/main-menu.json`));
});

app.get('/api/top-menu/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/top-menu.json`));
});

app.get('/api/brands-carousel/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/brands-carousel.json`));
});

app.get('/api/slider-params/', async (req, res) => {
    res.json(await getFileJson(`${__dirname}/data/slider-params.json`));
});

app.get('/api/specials-carousel/', async (req, res) => {
  res.json(await getFileJson(`${__dirname}/data/specials-carousel.json`));
});

app.get('/api/hits-carousel/', async (req, res) => {
  res.json(await getFileJson(`${__dirname}/data/hits-carousel.json`));
});

app.get('/api/ymap-list/', async (req, res) => {
  res.json(await getFileJson(`${__dirname}/data/ymap-list.json`));
});

app.get('/api/footer-menu/', async (req, res) => {
  res.json(await getFileJson(`${__dirname}/data/footer-menu.json`));
});

app.listen(1500);

console.log('Сервер стартовал!');