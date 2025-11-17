import express from 'express';
import { getAllUser } from '../Controller/userController.js';

const router = express.Router();

router.get("/user", getAllUser);

export default router
