import db from '../config/db.js';

const createBusTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50) NOT NULL,
    totalSeats INT NOT NULL,
    avaialableSeats INT NOT NULL
    )`;

    try{
       await db.execute(query);
       console.log(`Bus table created successfully`);
    }catch (err){
        console.log('Error creating bus table:', err);

    }
};

export default createBusTable;