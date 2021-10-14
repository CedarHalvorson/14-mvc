const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {

}
Post.init(
  {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  { sequelize }
);


module.exports = Post;