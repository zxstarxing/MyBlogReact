import mysql from "mysql";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "myblog"
});

export default pool;
