import express, {Router} from 'express';

export default (): Router => {
    const router = express.Router();

    router.use('/', (req, res) => {
        res.send({
            res: 200,
            data: req
        });
    });

    return router;
};
