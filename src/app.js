const express = require('express');

const app = express();

// req handler function, 1st parameter is path t the api
// jo bhi route rahega.. sab ussi ke hisaab se chalege
// every '/' route with a word will be a new route and will handle all the routes as parent
// changing the sequence will change the behaviour of the route
// order is very very important
// app.use('/',(req, res) => {
// res.send('test from the server');
// });
// routes can have regex pattern as well
// req.query - retrurns an object - to get the query parameters from the url
// req.params - returna an object - to get the parameters from the url
// : in / - dynamic routes

// agar aapki hierarchy same rahi and sirf ek mein kuch extra hai to root api call ka hi response aayega..
// lekin agar koi ek bhi api pura common nhi hai start se to usme doosre routes hoge..
  app.use('/firse/1/3/2',(req, res) => {
    res.send('firse 1 from the server');
    }); // yeh chalega... but agar yeh /firse/1/2/3/4 bhi rahega to response "firse 2 from the server" hi aayega


    app.use('/firse/1/2/3',(req, res) => {
      res.send('firse 2 from the server');
      });

          // // this will only handle get call to user
          // app.use('/user', (req, res) => {
          //   res.send({firstName: 'John', lastName: 'Cena'});
          // });

      // this will only handle get call to user
      app.get('/user', (req, res) => {
        res.send({firstName: 'John', lastName: 'Cena'});
      });

        // this will only handle post call to user
        app.post('/user/:userId/:name', (req, res) => {
          console.log(req.params);
          console.log("Saved data to the database");
          res.send("Data successfully saved");
        });

          // this will only handle delete call to user
          app.delete('/user', (req, res) => {
            console.log("Deleted data from the database");
            res.send("Data successfully deleted");
          });

      // this will match all the HTTP method API calls to /user
app.use('/user',(req, res) => {
  res.send('hello User');
  });

//app is listening requests on port 3000
app.listen(7777, () =>{console.log('I am listening')});