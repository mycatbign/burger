// ==================================================================
// burgers application 
// ==================================================================

// ==================================================================
// establish port to listen on
// if deployed via heroku then heroku dynamically assigns port
// ==================================================================
var PORT = process.env.PORT || 8080;

// ==================================================================
// set up express to run our server
// ==================================================================
// instantiate express
var express = require('express');
// create our express app by setting it to the app variable
var app = express();

// ==================================================================
// set up our express middleware which process the incoming requests 
// before handing them down to the routes
// ==================================================================
// static content will be served up for the app from the "public" 
// directory in the application directory
app.use(express.static(__dirname + '/public'));
// JBOND - RESEARCH URLENCODED AND JSON PARSERS
// parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==================================================================
// set up express-handlebars templating so we can build templates
// and keep our views and code separated
// ==================================================================
var exphbs = require('express-handlebars');
// JBOND - RESEARCH ENGINE AND SET
// 'main' below must be in layout directory as per handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ==================================================================
// import routes and give the server access to them
// ==================================================================
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

console.log("server > loaded routes");
// ==================================================================
// start our server and begin listening to client requests
// on the designated PORT
// ==================================================================
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});