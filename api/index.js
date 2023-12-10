const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Database in Sync");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/admin", require("./routes/admin"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// database
// Admin - id, name, email, password, forgetpassword, changepassword, created_at, updated_at
// Pages - id, name, uniqueId, endpoint, htmlCode, created_at, updated_at
// Rows - id, uniqueId, pageId, columnType, rowIndex, created_at, updated_at
// Columns - id, uniqueId, pageId, rowId, content, width, index, created_at, updated_at
// Images - id, uniqueId, image, fileType, created_at, updated_at
