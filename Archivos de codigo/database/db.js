const mysql = require('mysql');
const conennection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conennection.connect((error)=>{
    if(error){
        console.log('El error de conexión es : '+error);
        return;
    }
    console.log('¡Se conectó a la base de datos!');
});
module.exports = conennection;