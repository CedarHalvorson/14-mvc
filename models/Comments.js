const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model {

}
Comments.init(
  {
    text: DataTypes.STRING,
  },
  { sequelize }
);


module.exports = Comments;
