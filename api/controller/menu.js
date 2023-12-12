const { menus, submenus, menunames } = require("../db/db");
const Menus = menus;
const SubMenus = submenus;
const MenuNames = menunames;

exports.getAllMenusName = async (req, res) => {
  let success = false;
  try {
    let menuNames = await MenuNames.findAll({});

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: menuNames,
    });
  } catch (err) {
    return res.status(500).send({
      status: 200,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.getAllMenus = async (req, res) => {
  let success = false;
  try {
    const { id } = req.params;

    let menuName = await MenuNames.findOne({
      where: {
        id,
      },
    });

    if (!menuName) {
      return res.status(404).send({
        status: 404,
        success,
        message: "Menu name not found",
      });
    }

    let allMenus = await Menus.findAll({
      where: {
        menuNameId: id,
      },
    });

    let finalMenu = [];

    for (let i = 0; i < allMenus.length; i++) {
      let subMenu = await SubMenus.findAll({
        where: {
          menuId: allMenus[i].id,
          menuNameId: id,
        },
      });
      finalMenu.push({
        ...allMenus[i],
        subMenus: subMenu,
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: finalMenu,
    });
  } catch (err) {
    return res.status(500).send({
      status: 200,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.addMenus = async (req, res) => {
  let success = false;
  try {

    

  } catch (err) {
    return res.status(500).send({
      status: 200,
      success,
      message: "Internal Server Error.",
    });
  }
};
