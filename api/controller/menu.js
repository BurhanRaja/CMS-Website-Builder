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
    const { menus } = req.body;

    await SubMenus.destroy({});
    await Menus.destroy({});

    for (let i = 0; i < menus.length; i++) {
      let menu = await Menus.create({
        name: menus[i].name,
        link: menus[i].link,
        type: menus[i].type,
      });
      for (let j = 0; j < menus[i].submenus.length; i++) {
        await SubMenus.create({
          name: menus[i].submenus[j].name,
          link: menus[i].submenus[j].link,
          menuId: menu.id,
          type: menus[i].submenus[j].type,
        });
      }
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
