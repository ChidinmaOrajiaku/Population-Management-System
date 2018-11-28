
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LocationDetails', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    malePopulation: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    femalePopulation: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    totalPopulation: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface /* , Sequelize */ => queryInterface.dropTable('LocationDetails'),
};
