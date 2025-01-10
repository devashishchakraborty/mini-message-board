import { Router } from "express";

const indexRouter = Router();

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

indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
indexRouter.get("/new", (req, res) => res.send("Welcome to NEW"));

export default indexRouter;