import db from '../config/db.js';


const createBookingTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS bookings(
    id  INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL,
    userid INT,
    busid INT,
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (busid) REFERENCES buses(id))`
    ;

     try{
      await db.execute(query);
     }catch(err){
        console.error('Error creating booking table:', err);

     }
};
export default createBookingTable;