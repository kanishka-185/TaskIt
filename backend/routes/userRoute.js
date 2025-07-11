import express from 'express'
import { getCurrentUser, loginUser, registerUser, updatePassword, updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

//Public links

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);

//private links (protection)

userRouter.get('/me',authMiddleware, getCurrentUser);
userRouter.put('/profile',authMiddleware, updateProfile);
userRouter.put('/password',authMiddleware,updatePassword);

export default userRouter;