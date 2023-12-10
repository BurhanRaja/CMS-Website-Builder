const { menus, submenus } = require("../db/db");
const Menus = menus;
const SubMenus = submenus;

exports.getAllMenus = async (req, res) => {
  let success = false;
  try {
    let finalMenus = [];

    const allMenus = await Menus.findAll({
      raw: true,
    });

    for (let i = 0; i < allMenus.length; i++) {
      let subMenus = await SubMenus.findAll({
        where: {
          menuId: allMenus[i].id,
        },
        raw: true,
      });
      finalMenus.push({
        ...allMenus,
        submenus: [...subMenus],
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      data: finalMenus,
    });
  } catch (err) {
    return res.status(500).send({
      err,
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};

exports.addMenu = async (req, res) => {
  let success = false;

  try {
    const { name, link, type, subMenus } = req.body;

    await SubMenus.destroy({});
    await Menus.destroy({});

    let menu = await Menus.create({
      name,
      link,
      type,
    });

    for (let i = 0; i < subMenus.length; i++) {
      await SubMenus.create({
        id: subMenus[i].id,
        name: subMenus[i].name,
        link: subMenus[i].link,
        menuId: menu.id,
        type: subMenus[i].type,
      });
    }

    success = true;
    return res.status(200).send({
      status: 200,
      success,
      message: "Menus Added",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      success,
      message: "Internal Server Error.",
    });
  }
};
