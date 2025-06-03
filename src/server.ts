import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 5000;

const uri = "mongodb+srv://bakiabdullah:TIOkDaMUusiQNBYV@cluster0.uqgxsrk.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Starting the server
const bootstrap = async () => {
// Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  console.log("Connected to MongoDB!")
  server = app.listen(port, async () => {
    console.log(`Todo app listening on port ${port}`)
  })
}

bootstrap()