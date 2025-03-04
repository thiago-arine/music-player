// API (Application Programming Interface) => Comunicação entre duas ou mais unidades => Request/Answer
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Only works with endpoint /artists n /songs");
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Working at ${PORT}`);
});
