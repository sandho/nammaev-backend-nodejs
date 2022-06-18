require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Working fine..."});
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/station.routes.js')(app);
require('./app/routes/rating.routes.js')(app);

// listen for requests
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 3000");
});