import {NextFunction, Request, Response} from 'express';
import {HandleError} from '../middlewares/error.middleware';

export class UserController {
    constructor() {
        console.log('instance controller');
    }

    public createUser(_: Request, __: Response, next: NextFunction) {
        try {
            console.log('create user');
            throw new HandleError({
                error: 'BadRequest',
                message: 'Test error'
            });
        } catch (e) {
            next(e);
        }
    }
}
