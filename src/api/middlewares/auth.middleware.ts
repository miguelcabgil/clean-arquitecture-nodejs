import {NextFunction, Request, Response} from 'express';

export default (_: Request, __: Response, next: NextFunction) => {
    console.log('auth.middleware');
    next();
}
