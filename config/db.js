import mysql from 'mysql2';

const mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gulana@123',
    database: 'testdb'
})

mydb.connect((err) => {
    if(err) {
        console.error('Error is accuring men',err);
        return;
    }else{
        console.log('connected to the database');
    }
})

export default mydb;