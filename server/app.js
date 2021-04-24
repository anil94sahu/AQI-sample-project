
const express = require('express');
const app = express();
const pool  = require('./connection.js');
const cors = require('cors');

app.use(cors({ origin: true }));
app.use(express.static(__dirname));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

app.get('/api/aqi', function (req, res) {
    pool.query('SELECT * from aqi', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
      });
  })

app.listen(8000)