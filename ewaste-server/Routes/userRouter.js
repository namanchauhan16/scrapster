import express from 'express';
const router = express.Router();
import { register, login, deleteUser } from '../Controllers/userController.js';

router.post('/register', register);
router.post('/login', login);
router.delete('/delete', deleteUser);

export default router;