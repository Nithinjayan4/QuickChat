import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/messageController.js";
import { productRoute } from "../middleware/auth.js";
import express from "express";

const messageRouter = express.Router();

messageRouter.get("/users", productRoute, getUsersForSidebar);
messageRouter.get("/:id", productRoute, getMessages);
messageRouter.put("/mark/:id", productRoute, markMessageAsSeen);
messageRouter.post("/send/:id", productRoute, sendMessage);

export default messageRouter;
