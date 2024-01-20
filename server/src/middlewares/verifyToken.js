import jwt from "jsonwebtoken";
require("dotenv").config();
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("token", token);
  if (!token) {
    return res.status(200).json({
      err: 1,
      msg: "Chưa đăng nhập",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err)
      res.status(200).json({
        err: 2,
        msg: "Token không hợp lệ",
      });
    req.currentUser = decode;
    next();
  });
};
export const isAdmin = (req, res, next) => {
  const { role } = req.user;
  console.log(role);
  if (role === "admin")
    return res.status(401).json({
      success: false,
      mes: "Requested admin role",
    });
  next();
};
