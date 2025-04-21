// controllers/userController.js
import UserModel from '../models/userModel.js';

class UserController {
  // Get all users
  static async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      res.status(200).json({
        status: 'success',
        data: users
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error fetching users',
        error: error.message
      });
    }
  }

  // Get user by ID
  static async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserModel.getUserById(userId);
      
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${userId} not found`
        });
      }
      
      res.status(200).json({
        status: 'success',
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error fetching user',
        error: error.message
      });
    }
  }

  // Create new user
  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({
          status: 'error',
          message: 'Name and email are required'
        });
      }
      
      const newUser = await UserModel.createUser({ name, email });
      
      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: newUser
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error creating user',
        error: error.message
      });
    }
  }

  // Update user
  static async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const { name, email } = req.body;
      
      if (!name && !email) {
        return res.status(400).json({
          status: 'error',
          message: 'At least one field (name or email) is required for update'
        });
      }
      
      // First check if user exists
      const existingUser = await UserModel.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${userId} not found`
        });
      }
      
      // Prepare update data, keeping existing values if not provided
      const updatedData = {
        name: name || existingUser.name,
        email: email || existingUser.email
      };
      
      const updatedUser = await UserModel.updateUser(userId, updatedData);
      
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: updatedUser
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error updating user',
        error: error.message
      });
    }
  }

  // Delete user
  static async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      
      // First check if user exists
      const existingUser = await UserModel.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          status: 'error',
          message: `User with ID ${userId} not found`
        });
      }
      
      const result = await UserModel.deleteUser(userId);
      
      res.status(200).json({
        status: 'success',
        message: `User with ID ${userId} deleted successfully`
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error deleting user',
        error: error.message
      });
    }
  }
}

export default UserController;