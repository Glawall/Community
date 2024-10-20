import express, { Application } from "express";
import { preloadHelpTypes } from "./utils/preloadHelpTypes";

import errorHandler from "./errors/errorHandler";
import router from "./routes";

const app: Application = express();

// * Parser
app.use(express.json());

(async () => {
  try {
    await preloadHelpTypes();
  } catch (error) {
    console.error("Error preloading help types:", error);
  }
})();

// * Route
app.use(router);

// * Custom Error Handler
app.use(errorHandler);

export default app;
