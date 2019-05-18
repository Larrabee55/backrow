const mysql = require("mysql")

const connection = mysql.createConnection({
    password:"password1",
    user:"root",
    port:3306,
    database:"billPayDb",
    host:"localhost"
})