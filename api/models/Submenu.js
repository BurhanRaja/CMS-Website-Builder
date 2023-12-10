const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SubMenu = sequelize.define(
    "Submenu",
    {
      menuId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      type: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );

  return SubMenu;
};
