import {Express} from 'express';
import UserRoute from './user.route';

export default (app: Express) => {
    app.use('user', UserRoute);
}
