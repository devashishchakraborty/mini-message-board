import {
  getMessage,
  getAllMessages,
  insertMessage,
  deleteAllMessages,
} from "../db/queries.js";
import asyncHandler from "express-async-handler";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getMessages = async (req, res) => {
  const messages = await getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { messages: messages });
};

const createMessageGet = async (req, res) => res.render("form");
const createMessagePost = async (req, res) => {
  const { author, text } = req.body;
  await insertMessage(author, text);
  res.redirect("/");
};

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await getMessage(messageId);

  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { message: message });
});

const deleteMessages = async (req, res) => {
  await deleteAllMessages();
  res.redirect("/");
};

export default {
  getMessages,
  createMessageGet,
  createMessagePost,
  getMessageById,
  deleteMessages,
};
