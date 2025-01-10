import express from "express";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Mini Message Board - listening on PORT ${PORT}`);
});
