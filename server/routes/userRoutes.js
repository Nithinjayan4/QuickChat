import express from 'express';
import { checkAuth, login, signup, updateProfile } from '../controllers/userController.js';
import { productRoute } from '../middleware/auth.js';

const userRouter = express.Router();


userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.put('/update-profile',productRoute,updateProfile);
userRouter.get('/check',productRoute,checkAuth);


export default userRouter;