import express from  'express';
import createBookingTable from './models/bookingModel.js';
import createUserTable from './models/userModel.js';
import createBusTable from './models/busModel.js';  
import createPaymentTable from './models/paymentModel.js';

const app = express();

app.use(express.json());

const setUpDataBase = async () =>{
  await createUserTable();
  await createBusTable();
  await createBookingTable();
  await createPaymentTable();
  console.log('Database setup complete');
}
 

 setUpDataBase();


app.get('/', (req, res) => {
  res.send('Hello World!');

} )

app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
  