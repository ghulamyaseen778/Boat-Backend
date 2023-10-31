import express from "express";
import {
  LoginUser,
  MakeVendor,
  RegisterdUser,
} from "../Controllers/UserController.js";
import { checkToken } from "../Middleware/index.js";
import { CreateBoat } from "../Controllers/BoatController.js";

const route = express.Router();

//userRoutes---------------------------------

route.route("/registerd").post(RegisterdUser);
route.route("/login").post(LoginUser);
route.route("/user").put(checkToken, MakeVendor);

//BoatsRoutes--------------------------------

route.route("/createboat").post(checkToken,CreateBoat)

export default route;
