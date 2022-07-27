import jwt from "jsonwebtoken";
import { Request } from "express-validator/src/base";

export declare interface IUserRequest extends Request {
  currentUser?: string | jwt.JwtPayload;
}
