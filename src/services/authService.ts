import user from "@/models/user";
import Container, { Inject, Service } from "typedi";

@Service()
export default class AuthService {
  constructor(@Inject("userModel") private userModel: Models.UserModel) {}

  public async register(
    fname: string,
    lname: string,
    email: string,
    password: string
  ) {
    const userRecord = await this.userModel.create({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });

    return 1;
  }
}
