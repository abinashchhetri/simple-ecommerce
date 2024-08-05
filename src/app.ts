import express from "express";
import config from "./config";
import loaders from "./loaders";

function startSurver() {
  const server = express();
  loaders({ server });

  server.listen(config.port, () => {
    console.log("server started at port ", config.port);
  });
}

startSurver();
