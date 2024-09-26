const express = require('express');

const app = express();

// req handler function, 1st parameter is path t the api
app.use('/test',(req, res) => {
res.send('test from the server');
});

app.use('/retest',(req, res) => {
  res.send('retest from the server');
  });

  app.use('/firse',(req, res) => {
    res.send('firse from the server');
    });

app.use('/hello',(req, res) => {
  res.send('hello from the server');
  });

//app is listening requests on port 3000
app.listen(7777, () =>{console.log('I am listening')});