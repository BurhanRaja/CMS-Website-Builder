const { Router } = require("express");
const {
  getAllPages,
  createPage,
  editPage,
  changePublishedStatus,
  getSinglePage,
  getPageEditorData,
  getSinglePageByEndpoint,
} = require("../controller/page");
const {
  getAllMenus,
  getAllMenusName,
  addMenus,
  editMenus,
  addMenuName,
} = require("../controller/menu");
const router = Router();

router.get("/pages/all", getAllPages);

router.get("/pages/endpoints", getSinglePageByEndpoint);

router.post("/pages/create", createPage);

router.put("/pages/update/:id", editPage);

router.put("/pages/changestatus/:id", changePublishedStatus);

router.get("/pages/:id", getSinglePage);

router.get("/pages/editor/:id", getPageEditorData);

router.get("/menunames/all", getAllMenusName);

router.get("/menus/all/:id", getAllMenus);

router.get("/menunames/add", addMenuName);

router.post("/menus/add", addMenus);

router.post("/menus/edit/:id", editMenus);

module.exports = router;
