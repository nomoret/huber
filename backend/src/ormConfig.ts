import { ConnectionOptions } from "typeorm";

const defaultConnectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "huber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "admin",
  password: process.env.DB_PASSWORD,
};

export default defaultConnectionOptions;
