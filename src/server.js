import express from "express";
import morgan from "morgan";
import aptRouters from "./routers/aptRouters";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.urlencoded({ extended: true })); // body-parser

app.use("/", aptRouters);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
