const connection = require('./connection.js');
const burger = require('../models/burger.js');

module.exports = (app) =>{
    app.get('/api/all', (req, res) =>{
        burger.findAll({}).then((results) =>res.json(results));
    });
};