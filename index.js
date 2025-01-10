import express from "express";

const app = express();
const PORT = 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));


app.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
app.get("/new", (req, res) => res.send("Welcome to NEW"));

app.listen(PORT, () => {
  console.log(`Mini Message Board - listening on PORT ${PORT}`)
})