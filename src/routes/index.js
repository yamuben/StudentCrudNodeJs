import {Router} from 'express';
import UserController from '../controllers/userController';
const route = Router();


route.post("/user/register",UserController.registerUser);
route.get("/user/all",UserController.getAllUsers);

export default route;