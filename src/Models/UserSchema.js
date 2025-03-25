import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    country:{
      type:[String],
      enum:["all","uae"]
    },
    role: {
      type: String,
      default: "user",
      enum: [
        "gcc_head",
        "country_head",
        "regional_manager",
        "operation_manager",
        "brand_manager",
        "area_manager",
        "gcc_head_project",
        "country_head_project",
        "project_manager",
        "project_engineer",
        "site_engineer",
        "drafts_man",
        "facility_manager",
        "regional_manager_project",
        "project_engineer",
        "site_engineer"
      ],
    },
    head_id:{
      type:String,
      default:""
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const otpSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
const Otp = mongoose.model("otp", otpSchema);
export default User;
export { Otp };
