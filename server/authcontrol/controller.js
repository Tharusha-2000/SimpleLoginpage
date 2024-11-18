const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*..............................login page.............................................*/

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    console.log(user.email);
    if (!user.email) {
      return res
        .status(401)
        .json({ loginStatus: false, msg: "Incorrect email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ loginStatus: false, msg: "Incorrect password" });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({
      msg: "Login Successful...!",
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ loginStatus: false, Error: "Internal Server Error" });
  }
};

