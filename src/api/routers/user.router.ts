import express, {Router} from 'express';
import {UserController} from '../controllers/user.controller';
import Auth from '../middlewares/auth.middleware';

const router: Router = express.Router();
const userController: UserController = new UserController();

router.use(Auth);
router.post('/create', userController.createUser);

export default router;
