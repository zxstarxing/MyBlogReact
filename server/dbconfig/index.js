import mysql from "mysql";
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "myblog"
});

export default database;
