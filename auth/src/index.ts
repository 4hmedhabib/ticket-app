import express from "express";
import "express-async-errors";

// Mongoose
import mongoose from "mongoose";

// Routes
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouters } from "./routes/signup";

//Middleware
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found";
import cookieSession from "cookie-session";
import jwt from "jsonwebtoken";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouters);
app.use(signoutRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined!.");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    console.log("CONNECTED TO MONGODB SUCCESSFULLY");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("====åßServer Listening on port 3000!====");
  });
};

start();
