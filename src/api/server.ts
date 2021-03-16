import express from 'express';
import bodyparser from 'body-parser';
import routes from './routes/routes';

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));
routes(app);
app.listen(3000, () => {
    console.log('Listen on port 3000');
});
