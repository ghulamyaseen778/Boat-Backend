import express from "express";
import {
  LoginUser,
  MakeVendor,
  RegisterdUser,
  VerifyOtp,
} from "../Controllers/UserController.js";
import { checkToken } from "../Middleware/index.js";
import { CreateBoat, getAllBoats } from "../Controllers/BoatController.js";

const route = express.Router();

//userRoutes---------------------------------

route.route("/registerd").post(RegisterdUser);
route.route("/login").post(LoginUser);
route.route("/user").put(checkToken, MakeVendor);
route.route("/verify").post(checkToken, VerifyOtp);

//BoatsRoutes--------------------------------

route.route("/boat").get(getAllBoats)
route.route("/createboat").post(checkToken,CreateBoat)

export default route;
