import statesInNigeria from '../middlewares/nigerianStates';

export default (sequelize, DataTypes) => {
  const LocationDetails = sequelize.define('LocationDetails', {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Location already exists',
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Location cannot be empty',
        },
        isANigerianState(value) {
          if (!statesInNigeria.includes(value)) {
            throw new Error('Please include a valid state in Nigeria');
          }
        },
      },
    },
    malePopulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Please input a valid number',
        },
        isInt: {
          args: true,
          msg: 'Please input a valid Integer',
        },
      },
    },
    femalePopulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Please input a valid number',
        },
        isInt: {
          args: true,
          msg: 'Please input a valid number',
        },
      },
    },
    totalPopulation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Please input a valid number',
        },
        isInt: {
          args: true,
          msg: 'Please input a valid number',
        },
      },
    },
  }, {});
  LocationDetails.associate = (models) => {
    // associations can be defined here
  };
  return LocationDetails;
};
