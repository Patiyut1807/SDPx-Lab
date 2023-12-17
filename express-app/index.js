import express, { json } from "express";
import "dotenv/config";
import mysql from "mysql2/promise";
import dbconfig from "./config/dbConfig.js";
import { v4 as uuidv4 } from "uuid";

const port = process.env.PORT || 4000;
const app = express();

// const connection = await mysql.createConnection({
//   host: dbconfig.HOST,
//   user: dbconfig.USER,
//   password: dbconfig.PASSWORD,
//   database: dbconfig.DB_NAME,
//   port: dbconfig.DB_PORT,
// });
// connection.connect();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user",(req, res) => {
  let { name, age } = req.body;
  console.log(res.body);
  // await connection.query(
  //   `CREATE TABLE IF NOT EXISTS USERS(
  //     uid VARCHAR(36) NOT NULL PRIMARY KEY,
  //     name VARCHAR(255) NOT NULL,
  //     age INT NOT NULL
  // );`
  // );
  // await connection.query(
  //   `INSERT INTO USERS VALUES (${uuidv4()},${name},${age});`
  // );
  res.send("success")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
