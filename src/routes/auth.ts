import {  Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { checkJwt } from "../middleware/session";

const router = Router();

 router.post("/register", registerCtrl);
 router.post("/login", loginCtrl);


export { router };
