import express from "express";

import SchemeRouter from "./schemes/scheme-router";

const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

export default server;
