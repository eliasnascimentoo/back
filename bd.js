const mysql = require("mysql");
 
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "academico"
});

connection.connect( error => {
    if (error) throw error;
    console.log("Conectado ao bancdo de dados.");
});

module.exports = connection;