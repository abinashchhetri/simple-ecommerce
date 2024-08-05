import { UserInterface } from "@/interface/UserInterFace";
import {Model, Document} from "mongoose"

declare global {
    namespace Models{
        export type UserModel = Model<UserInterface&Document>
    }
}