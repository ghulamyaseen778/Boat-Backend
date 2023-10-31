import jsonwebtoken from "jsonwebtoken";
import User from "../Models/UserSchema.js";
import { errHandler, responseHandler } from "../helper/response.js";

const RegisterdUser = async (req, res) => {
  let { name, email, password, phoneNumber } = req.body;
  let profilePhoto = "https://placehold.co/100x100?text=";
  if (User && (await User.findOne({ email }))) {
    errHandler(res, 1, 403);
    return;
  }
  if (password?.trim().length < 8) {
    errHandler(res, 2, 403);
    return;
  }
  if (name?.trim().length < 3) {
    errHandler(res, 3, 403);
    return;
  }
  if (phoneNumber?.trim().length < 11) {
    errHandler(res, "Please Enter Correct PhoneNumber", 403);
    return;
  }

  let profileName = name.split(" ");
  if (profileName.length >= 2) {
    profileName = [profileName[0][0], profileName[1][0]]
      .join("")
      .toLocaleUpperCase();
  } else {
    profileName = profileName[0][0].toLocaleUpperCase();
  }

  User.create({
    name,
    email,
    password,
    phoneNumber,
    profilePhoto: profilePhoto + profileName,
  })
    .then((data) => {
      let { name, email, profilePhoto, phoneNumber, _id, createdAt, role } =
        data;
      let token = jsonwebtoken.sign(
        { name, email, profilePhoto, _id, createdAt, role, phoneNumber },
        process.env.SECRET_KEY
      );
      responseHandler(res, {
        name,
        email,
        profilePhoto,
        _id,
        createdAt,
        token,
        phoneNumber,
        role,
      });
    })
    .catch((err) => {
      errHandler(res, 5, 409);
      console.log(err)
    });
};

const LoginUser = (req, res) => {
  let { email, password } = req.body;
  if (password.trim().length < 8) {
    errHandler(res, 2, 403);
    return;
  }
  User.findOne({ email })
    .then((data) => {
      let { name, email, profilePhoto, phoneNumber, _id, createdAt, role } =
        data;
      let token = jsonwebtoken.sign(
        { name, email, profilePhoto, phoneNumber, _id, createdAt, role },
        process.env.SECRET_KEY
      );
      responseHandler(res, {
        name,
        email,
        profilePhoto,
        _id,
        createdAt,
        token,
        phoneNumber,
        role,
      });
    })
    .catch((err) => {
      errHandler(res, 5, 409);
    });
};
const MakeVendor = (req, res) => {
  const user = req.user;
  User.findByIdAndUpdate({ _id: user._id }, { role: "vendor" }, { new: true })
    .then((data) => {
      responseHandler(res, data);
    })
    .catch((err) => {
      errHandler(res, 5, 409);
    });
};

export { RegisterdUser, LoginUser, MakeVendor };
