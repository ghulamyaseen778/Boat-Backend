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
import { CreateNewJob, GetNewJob, UpdateNewJob } from "../Controllers/CreateJobController.js";

const route = express.Router();

//userRoutes---------------------------------

route.route("/registerd").post(RegisterdUser);
route.route("/login").post(LoginUser);
route.route("/user").put(checkToken, MakeVendor);
route.route("/verify").post(checkToken, VerifyOtp);
route.route("/forgot").post(ForgotPassword);
route.route("/newpassword").post(checkToken,NewPassword);

route.route("/createnewjob").post(CreateNewJob).get(GetNewJob).put(UpdateNewJob)


export default route;
