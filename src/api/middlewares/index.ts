import {Express} from 'express';
import bodyParser from 'body-parser';
import Cors from './cors.middleware';
import Errors from './error.middleware';

export default (app: Express) => {
    app.use(Cors);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(Errors);
}

