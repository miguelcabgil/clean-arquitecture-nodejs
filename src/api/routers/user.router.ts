import express from 'express';
import {UserController} from '../controllers/user.controller';
import Auth from '../middlewares/auth.middleware';

const router = express.Router();
const userController = new UserController();

router.use(Auth);
router.get('/create', userController.createUser);

export default router;
