import {Express} from 'express';
import bodyParser from 'body-parser';
import Cors from './cors.middleware';
import Errors from './error.middleware';

const request = (app: Express) => {
    app.use(Cors);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
};
const response = (app: Express) => {
    app.use(Errors);
};
export default {
    request,
    response
};

