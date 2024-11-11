import { Server } from "http";
import app from "./app";
import config from "./config";

const port = config.port;
let server: Server;
async function main() {
  try {
    server = app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
