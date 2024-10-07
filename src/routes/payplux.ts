import {  Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { checkJwt } from "../middleware/session";
import { getTransactionByIdAcount } from "../controllers/pagoPluxController";

const router = Router();



router.get("/getById", getTransactionByIdAcount);


export { router };
