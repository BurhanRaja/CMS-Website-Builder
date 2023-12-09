const { Router } = require("express");
const { getAllPages, createPage, editPage } = require("../controller/page");
const router = Router();

router.get("/pages/all", getAllPages);

router.post("/pages/create", createPage);

router.put("/pages/update/:id", editPage);

module.exports = router;
