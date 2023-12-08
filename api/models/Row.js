const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Page = sequelize.define(
    "Page",
    {
      uniqueId: DataTypes.STRING,
      pageId: DataTypes.INTEGER,
      columnType: DataTypes.STRING,
      rowIndex: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );

  return Page;
};
