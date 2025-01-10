import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
});
indexRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  if (+messageId > messages.length || +messageId < 1) res.redirect("/");
  res.render("message", { message: messages.at(+messageId-1) });
});

export default indexRouter;
