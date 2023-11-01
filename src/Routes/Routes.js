import express from "express";
import {
  ForgotPassword,
  LoginUser,
  MakeVendor,
  NewPassword,
  RegisterdUser,
  VerifyOtp,
} from "../Controllers/UserController.js";
import { checkToken } from "../Middleware/index.js";
import {
  CreateBoat,
  UpdateBoat,
  getAllBoats,
} from "../Controllers/BoatController.js";

const route = express.Router();

//userRoutes---------------------------------

route.route("/registerd").post(RegisterdUser);
route.route("/login").post(LoginUser);
route.route("/user").put(checkToken, MakeVendor);
route.route("/verify").post(checkToken, VerifyOtp);
route.route("/forgot").post(ForgotPassword);
route.route("/newpassword").post(checkToken,NewPassword);

//BoatsRoutes--------------------------------

route.route("/boat").get(getAllBoats);
route.route("/createboat").post(checkToken, CreateBoat);
route.route("/updateboat").post(checkToken, UpdateBoat);

export default route;
