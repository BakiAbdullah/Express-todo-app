import app from "./app";
import { client } from "./config/mongodb";

let server;
const port = 5000;

// Starting the server
const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB!")
  server = app.listen(port, async () => {
    console.log(`Todo app listening on port ${port}`)
  })
}

bootstrap()