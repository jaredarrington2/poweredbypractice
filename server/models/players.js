'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    skill: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Player;
};
