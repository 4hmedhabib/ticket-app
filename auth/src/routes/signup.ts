import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { signupValidator } from "../validator";

// error middleware

// customer errors
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  signupValidator,
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log("Creating user....");
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouters };
