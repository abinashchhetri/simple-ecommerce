import api from "@/api";
import { servertype } from "./types";
import { json } from "express";
import { error } from "console";
import bodyParser from "body-parser";

export default ({ server }: servertype) => {
  server.get("/status", (req, res, next) => {
    res.status(200).json({ result: "server runnig" });
  });

  server.use(json());
  server.use(bodyParser.urlencoded({ extended: true, limit: "60mb" }));
  server.use("/api", api());

  server.use((req, res, next) => {
    const error = new Error("Resource Not Found");
    error["status"] = 404;

    next(error);
  });

  server.use((error, req, res, next) => {
    console.error(error.message);
    res.status(error.status || 500).json({ message: error.message });
  });
};
