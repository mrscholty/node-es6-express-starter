import express from 'express';
import fruitsRoute from './routes/fruits.route';

let app = express();

app.use('/api', fruitsRoute);

app.listen(3000, () => {
   console.log('API listens ...');
});


