import express from "express";

// Routes
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouters } from "./routes/signup";

//Middleware
import { errorHandler } from "./middleware/error-handler";

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouters);
app.use(signoutRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server Listening on port 3000!");
});
