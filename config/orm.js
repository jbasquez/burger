const connection = require('./connection.js');
const burger = require('../models/burger.js');

module.exports = (app) =>{
    app.get('/api/all', (req, res) =>{
        burger.findAll({}).then((results) =>res.json(results));
    });
    app.post('/api/new', (req, res) =>{
        console.log('rendering new data');
        burger.create({
            burger_name: "fds", //place hold
            devoured: true //place holder
        }).then((results) =>res.json(results));
    })
};