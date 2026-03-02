import mysql from 'mysql2/promise';

const getConnection = async () => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        database: 'nodejspro',
        password: '123456',
    });

    return connection;
}

export default getConnection;