const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

// Creates the application
const app = express()

// Enable CORS, Cross-Origin Resource Sharing, to allow API to be accessed by web pages,
// and other web origins
app.use(cors());

// Application parser to support JSON data format
app.use(bodyParser.json({ type: 'application/json' }))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Creates each route link
var indexRouter = require('./routes/index');
var authorRouter = require('./routes/author');
var usersRouter = require('./routes/users');

// Create all listener for each route link
app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/users', usersRouter);

// Execute local API server and create listener on port 5005
var server = app.listen(5000, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});