const connection = require('./connection.js');
const burger = require('../models/burger.js');

// module.exports = (app) =>{
//     app.get('/api/all', (req, res) =>{
//         burger.findAll({}).then((results) =>res.json(results));
//     });
//     app.post('/api/new', (req, res) =>{
//         console.log('rendering new data');
//         burger.create({
//             burger_name: "fds", //place hold
//             devoured: true //place holder
//         }).then((results) =>res.json(results));
//     })
//     const updatePost = (post) => {
//         fetch('/api/posts', {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(post),
//         })
//           .then(() => {
//             console.log('Attempting update to post');
//             window.location.href = '/blog';
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//       };
// };

let queryString = "SELECT * FROM " + tableInput + ";";

//how to make connection.queery with mysql function
// functions inside module.exports

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
