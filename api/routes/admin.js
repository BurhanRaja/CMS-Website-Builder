const { Router } = require("express");
const { getAllPages, createPage, editPage } = require("../controller/page");
const { getAllMenus, addMenu } = require("../controller/menu");
const router = Router();

router.get("/pages/all", getAllPages);

router.post("/pages/create", createPage);

router.put("/pages/update/:id", editPage);

router.get("/menus/all", getAllMenus);

router.post("/menus/add", addMenu);

module.exports = router;
