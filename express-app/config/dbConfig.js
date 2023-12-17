import 'dotenv/config'
export default  {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || "1234",
  DB_NAME: process.env.DB_NAME || "MySQL",
  DB_PORT: process.env.DB_PORT || 3306,
  dialect: "mysql",
};
