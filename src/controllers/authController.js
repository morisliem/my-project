const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hashPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        status: "user not found",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) {
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "incorrect username or password",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({
      status: "failed",
    });
  }
};
