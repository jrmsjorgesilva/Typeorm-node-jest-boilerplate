import 'reflect-metadata';
import express, { urlencoded, Request, Response } from "express";
import cors from "cors";
// routes
import usersRoute from "./routes/usersRoute";
import createConnection from './database/database';
import dotenv from "dotenv";
dotenv.config();


createConnection();
const server = express();
const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use(cors());
server.use(urlencoded({ extended: true }));

// routes
server.use("/$", (req: Request, res: Response) => {
  res.send("Inicio");
});
server.use("/users", usersRoute);

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${process.env.SERVER}:${PORT}`);
});
