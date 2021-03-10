const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    cat.all((data) => {
      const hbsObject = {
        burger: data,
        devoured: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  module.exports = router;