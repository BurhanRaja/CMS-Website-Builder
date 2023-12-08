const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// database
// Admin - id, name, email, password, forgetpassword, changepassword, created_at, updated_at
// Pages - id, name, uniqueId, endpoint, htmlCode, created_at, updated_at
// Rows - id, uniqueId, pageId, columnType, rowIndex, created_at, updated_at
// Columns - id, uniqueId, pageId, rowId, content, width, created_at, updated_at
// Images - id, uniqueId, image, fileType, created_at, updated_at
