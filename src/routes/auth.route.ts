import { Router } from 'express';
const router = Router()
import authController from '../controllers/auth.controller';

router.post('/register', authController.registerRoute)
router.post('/login', )

export default router;