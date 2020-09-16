// Require dotenv
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

// Require and use Expressjs
const express = require('express');
const app = express();
app.use(express.static('dist'));

// Require and use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Require and use cors
var cors = require('cors');
app.use(cors());

// Require fetch
const fetch = require('node-fetch');


// URL given by the user
let inputUrl = [];

// API related constants
const baseURL='https://api.meaningcloud.com/sentiment-2.1?key=';
const querySettings = '&lang=en&url=';
const apiKey = process.env.API_KEY;


// Assign the port for the app
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/meanining', async function(req, res){

	inputUrl = req.body.url;
    console.log("inputUrl now set to: ", inputUrl)

    // Obtain data requested by the user
    const info = await fetch(baseURL+apiKey+querySettings+inputUrl)
    .then( (info) => info.json())
    .then( data => {
        res.send(data)})
    .catch((error) => {
        console.log("error in promise (server side): ", error);
    });
})
