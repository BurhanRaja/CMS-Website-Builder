const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Menu = sequelize.define(
    "Menu",
    {
      name: DataTypes.STRING,
      subMenu: DataTypes.INTEGER,
      subMenuId: DataTypes.INTEGER,
      customLink: DataTypes.STRING,
      type: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );

  return Menu;
};
