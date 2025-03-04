// JavaScript Assíncrono => await async
// Fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://vsThiago:uX%23KXEc%25587%21K6e@cluster0.o3cvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("musicPlayer");
