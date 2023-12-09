const { admin } = require("../db/db");
const { hash, genSalt, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");
const Admin = admin;

exports.createAdmin = async (req, res) => {
  let success = false;

  try {
    const { email, name, password } = req.body;

    const salt = await genSalt(10);
    const securePassword = await hash(password, salt);

    await Admin.create({
      email,
      password: securePassword,
      name,
    });

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      message: "Admin created.",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.adminLogin = async (req, res) => {
  let success = false;

  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({
      where: {
        email,
      },
    });

    if (!admin) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Admin not found.",
      });
    }

    const checkPassword = compare(password, admin.password);
    if (!checkPassword) {
      return res.status(401).send({
        status: 401,
        success,
        message: "Invalid password.",
      });
    }

    const data = {
      admin: {
        id: admin.id,
        email: admin.id,
      },
    };
    const token = jwt.sign(data, jwtSecret);

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      token,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.updateAdmin = () => {
  
}