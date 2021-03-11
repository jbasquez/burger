const connection = require('./connection.js');
const burger = require('../models/burger.js');

module.exports = (app) =>{
    let queryString = "SELECT * FROM " + tableInput + ";";
    
    app.get('/burgers', (req, res) => {
        mysqlConnection.query('SELECT * FROM burgers', (err, rows, fields)=>{
            if(!err)
            res.send(rows);
            else
            console.log(err);
        })
    });
    
    app.delete('/burgers/:id', (req, res) => {
        mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?',[req.params.id], (err, rows, fields)=>{
            if(!err)
            res.send('Delete successful.');
            else
            console.log(err);
        })
    });
    app.post('/burgers', (req, res) => {
        let bur =req.body;
        var sql = "SET @id = ?; SET @burger_name = ?; Set @devoured = ?;\
        CALL BurgerAddOrEdit(@id, @burger_name, @devoured);";
    
        mysqlConnection.query(sql,[bur.id, bur.burger_name, bur.devoured],(err, rows, fields)=>{
            if(!err)
                rows.forEach(element => {
                    if(element.constructor == Array)
                    res.send('Added burger:'+ element[0].burger_name);
                });
            console.log(err);
        })
    });
    
    app.put('/burgers', (req, res) => {
        let bur =req.body;
        var sql = "SET @id = ?; SET @burger_name = ?; Set @devoured = ?;\
        CALL BurgerAddOrEdit(@id, @burger_name, @devoured);";
    
        mysqlConnection.query(sql,[bur.id, bur.burger_name, bur.devoured],(err, rows, fields)=>{
            if(!err)
                rows.forEach(element => {
                    if(element.constructor == Array)
                    res.send('Edited burger:'+ element[0].burger_name);
                });
            console.log(err);
        })
    });
};


//how to make connection.queery with mysql function
// functions inside module.exports


