import express, { Application } from "express";

// import errorHandler from "./middlewares/errorHandler";
import router from "./routes";

const app: Application = express();

// * Parser
app.use(express.json());

// * Route
app.use(router);

// // * Custom Error Handler
// app.use(errorHandler);

export default app;
