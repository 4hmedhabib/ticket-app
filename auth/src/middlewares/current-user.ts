import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUserRequest } from "../interfaces/request";

export const currentUserIsLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if (!req.session?.jwt) {
  //   return next();
  // }

  // try {
  //   const payload = jwt.verify(req.session?.jwt, process.env.JWT_KEY!);

  //   req.currentUser = payload;
  // } catch (err) {}

  // next();
  next();
};
