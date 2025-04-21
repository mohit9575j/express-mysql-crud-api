// import mysql from 'mysql2';

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Gulana@123',
//     database: 'testdb'
// })

// db.connect((err) => {
//     if(err) {
//         console.error('Error is accuring men',err);
//         return;
//     }else{
//         console.log('connected to the database');
//     }
// })

// export default db;





// config/db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if required environment variables are set
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
  console.error('Error: Database configuration environment variables are missing');
  process.exit(1); // Exit with error
}

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // This could be empty but that's determined by the .env file
  database: process.env.DB_NAME
});

db.connect((err) => {
  if(err) {
    console.error('Error connecting to database:', err);
    return;
  } else {
    console.log('Connected to the database');
  }
});

export default db;