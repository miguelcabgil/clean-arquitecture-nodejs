import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
    res.send({
        res: 200,
        data: req
    });
});
