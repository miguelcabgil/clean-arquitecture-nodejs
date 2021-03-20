import {NextFunction, Request, Response} from 'express';

export const AuthMiddleware = (_: Request, __: Response, next: NextFunction) => {
    next();
};
