import { Router } from "express";
import messageController from "../controllers/messageController.js";

const indexRouter = Router();

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/new", messageController.createMessageGet);
indexRouter.post("/new", messageController.createMessagePost);
indexRouter.get("/delete", messageController.deleteMessages);
indexRouter.get("/:messageId", messageController.getMessageById);

export default indexRouter;
