const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Page = sequelize.define(
    "Page",
    {
      uniqueId: DataTypes.STRING,
      pageId: DataTypes.INTEGER,
      rowId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      width: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );

  return Page;
};
