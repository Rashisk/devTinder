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
    // this function is called as route handler
    //agar res.send nhi kiya to vo response ke liye infinitely wait karta rahega...
    res.send('firse 1 from the server');
    }); // yeh chalega... but agar yeh /firse/1/2/3/4 bhi rahega to response "firse 2 from the server" hi aayega

// one route can have multiple route handlers
    app.use('/firse/1/2/3',(req, res) => {
      res.send('firse 2 from the server');
      });

          // // this will only handle get call to user
          // app.use('/user', (req, res) => {
          //   res.send({firstName: 'John', lastName: 'Cena'});
          // });

      // this will only handle get call to user
      app.get('/user', (req, res, next) => {
        next();
        // res.send({firstName: 'John', lastName: 'Cena'});
      }, 
      (req, res, next ) => {
        // res.send({firstName: 'Rashi', lastName: 'Khandelwal'});
        next();
        // agar maine next likha hai api hit kiya to error milegi ki usko /get user nhi mila
        // agar uske pas app.use('/user') rehta tha to vo uska response send kar deta tha.. 
        // lekin usko koi next route handler nhi mila to usne error throw kar di.. 
        /* agar bina next ke usko route handler mein laate the.. and aage execution 
        ke liye kuch pata nhi rehta tha.. to vo loop mein atak jaata tha.. */
//you can send individual route handlers or an array of route handlers --- the code will work exactly the same..
      }

    );

/**
 * Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:399:5)
    at ServerResponse.setHeader (node:_http_outgoing:649:11)
    at ServerResponse.header (D:\DevTinder\node_modules\express\lib\response.js:794:10)
    at ServerResponse.send (D:\DevTinder\node_modules\express\lib\response.js:174:12)
    at ServerResponse.json (D:\DevTinder\node_modules\express\lib\response.js:278:15)
    at ServerResponse.send (D:\DevTinder\node_modules\express\lib\response.js:162:21)
    at D:\DevTinder\src\app.js:46:13

    yeh error tab aata hai jab hum client ko 2 baar response bhejne ki koshish karte hai... 
    ek baar tcp connection establish hota hai and response jaane ke baad vo terminate 
    ho jaata hai... to server same url mein 2 baar response nhi send kar sakte hai..

 */


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
// app.use('/user',(req, res) => {
//   res.send('hello User');
//   });

//app is listening requests on port 3000
app.listen(7777, () =>{console.log('I am listening')});