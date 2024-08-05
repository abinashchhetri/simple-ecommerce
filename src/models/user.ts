import { UserInterface } from "@/interface/UserInterFace";
import mongoose, { mongo } from "mongoose";
import { Service } from "typedi";


const user = new mongoose.Schema({
  fname: {
    type: String,
  },

  lname: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email addres"],
    index: true,
  },

  password: {
    type: String,
  },
});

export default mongoose.model<UserInterface & mongoose.Document>("User", user);
