const { Router } = require("express");
const {
  getAllPages,
  createPage,
  editPage,
  changePublishedStatus,
} = require("../controller/page");
const router = Router();

router.get("/pages/all", getAllPages);

router.post("/pages/create", createPage);

router.put("/pages/update/:id", editPage);

router.put("/pages/changestatus/:id", changePublishedStatus);

module.exports = router;
