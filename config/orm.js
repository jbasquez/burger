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