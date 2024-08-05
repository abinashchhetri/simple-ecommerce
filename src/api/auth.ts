import { Router } from "express";
import { routertype } from "./types";
import Container from "typedi";
import AuthService from "@/services/authService";
import "reflect-metadata";

const authrouter = Router();
export default ({ router }: routertype) => {
  router.use("/auth", authrouter);

  authrouter.get("/getUsers", (req, res, next) => {
    res.status(200).json({
      users: [
        { name: "abinash", age: "23", education: "Bsc Hons Computingaffds" },
        { name: "Bishwash", age: "25", education: "BSC Science" },
        { name: "jashuda", age: "40", education: "Lab Assistence" },
        { name: "Buddhi", age: "50", education: "CMA" },
      ],
    });
  });

  authrouter.post("/register", (req, res, next) => {
    const { fname, lname, email, password } = req.body;
    console.log(
      `fname: ${fname}, lname: ${lname}, email: ${email}, password: ${password}`
    );

    try {
      const authService = Container.get(AuthService);
      authService.register(fname, lname, email, password);
    } catch (error) {
      console.error(error);
    }
  });
};
