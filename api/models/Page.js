const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Page = sequelize.define(
    "Page",
    {
      uniqueId: DataTypes.STRING,
      name: DataTypes.STRING,
      endpoint: DataTypes.STRING,
      htmlCode: DataTypes.TEXT,
      published: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );

  return Page;
};
