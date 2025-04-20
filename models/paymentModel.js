import db from '../config/db.js';

const createPaymentTable = async () => {
    const query = ` 
    CREATE TABLE IF NOT EXISTS payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL,
    userid INT ,
    busid INT,
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (busid ) REFERENCES buses(id))
    `;
    try{
        await db.execute(query);
console.log(`Payment table created successfully`);
} catch (err) {
        console.error('Error creating payment table:', err);
    }
}

export default createPaymentTable;