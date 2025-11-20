import express from 'express';
import { getAllUser } from '../Controller/userController.js';

const router = express.Router();

router.get("/users/:id", getAllUser);

export default router