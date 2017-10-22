import express from 'express';
import bodyParser from 'body-parser';
import languagesRoute from './routes/languages.route';

let app = express();

// configure express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// use routes
app.use('/api', languagesRoute);

// start server
app.listen(3000, () => {
    console.log('API listens ...');
});


