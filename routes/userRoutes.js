// routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/', UserController.getAllUsers);

// Get user by ID
router.get('/:id', UserController.getUserById);

// Create new user
router.post('/', UserController.createUser);

// Update user
router.put('/:id', UserController.updateUser);

// Delete user
router.delete('/:id', UserController.deleteUser);

export default router;