import path from "path"
import "dotenv/config"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/entities/user";
import { Client } from "./entities/entities/client";
import { Contact } from "./entities/entities/contact";

const dataSourceConfig = (): DataSourceOptions => {
    return {
      type: "postgres",
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT!),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      logging: false,
      entities: [
        User,
        Client,
        Contact
      ],
      migrations: ["src/migrations/*.ts"],
      synchronize: false,
    };
  };
  
  export const AppDataSource = new DataSource(dataSourceConfig());
