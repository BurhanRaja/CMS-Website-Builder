const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Menu = sequelize.define(
    "Menu",
    {
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      type: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );

  return Menu;
};
