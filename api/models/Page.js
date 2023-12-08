const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Page = sequelize.define(
    "Page",
    {
      uniqueId: DataTypes.STRING,
      name: DataTypes.STRING,
      endpoint: DataTypes.STRING,
      htmlCode: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );

  return Page;
};
