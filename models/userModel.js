// models/userModel.js
import db from '../config/db.js';

class UserModel {
  // Get all users
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, results) => {
        if (err) {
          console.error('Error fetching users:', err.message);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Get user by ID
  static getUserById(userId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
          console.error(`Error fetching user ID ${userId}:`, err.message);
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  // Create new user
  static createUser(userData) {
    return new Promise((resolve, reject) => {
      console.log('Inserting new user:', userData);
      db.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [userData.name, userData.email],
        (err, result) => {
          if (err) {
            console.error('Error creating user:', err.message);
            reject(err);
          } else {
            console.log('User inserted successfully with ID:', result.insertId);
            resolve({ id: result.insertId, ...userData });
          }
        }
      );
    });
  }

  // Update user
  static updateUser(userId, userData) {
    return new Promise((resolve, reject) => {
      console.log(`Updating user ID ${userId}:`, userData);
      db.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [userData.name, userData.email, userId],
        (err, result) => {
          if (err) {
            console.error(`Error updating user ID ${userId}:`, err.message);
            reject(err);
          } else {
            if (result.affectedRows === 0) {
              resolve(null); // No user found with this ID
            } else {
              console.log(`User ID ${userId} updated successfully`);
              resolve({ id: userId, ...userData });
            }
          }
        }
      );
    });
  }

  // Delete user
  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      console.log(`Deleting user ID ${userId}`);
      db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
          console.error(`Error deleting user ID ${userId}:`, err.message);
          reject(err);
        } else {
          if (result.affectedRows === 0) {
            resolve(false); // No user found with this ID
          } else {
            console.log(`User ID ${userId} deleted successfully`);
            resolve(true);
          }
        }
      });
    });
  }
}

export default UserModel;