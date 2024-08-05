import user from "@/models/user";
import dependencyInjector from "./dependencyInjector";
import express from "./express";
import mongo from "./mongo";
import { servertype } from "./types";

export default async ({ server }: servertype) => {
  try {
    express({ server });
    console.log("Express Loaded");

    await mongo();
    console.log("mongo Loaded");

    dependencyInjector([{ name: "userModel", model: user }]);
    console.log("dependency injected");
  } catch (error) {
    throw error;
  }
};
