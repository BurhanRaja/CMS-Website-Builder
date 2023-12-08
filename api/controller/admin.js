const { admin } = require("../db/db");
const Admin = admin;

exports.createAdmin = (req, res) => {
  let success = false;

  try {

    const { email, name, password } = req.body;

    

  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};
