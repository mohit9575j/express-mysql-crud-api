import db from '../config/db.js';

const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE)
    `;
    try {
        await  db.execute(query);
        console.log('User table created successfully');
    }catch (err){
        console.error('Error creating user table:', err);
    }
    
};

export default createUserTable;