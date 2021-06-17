import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import ReqresServer from "./servers/reqres";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
new ReqresServer(app);

app.listen(PORT, () => {
  console.log(chalk.bgBlue(`🚀 Server ready @ http://localhost:${PORT}`));
});

export default app;
