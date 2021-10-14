const { Sequelize,Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {
  /*
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
  */
}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

User.addHook('beforeCreate', async (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return user;
});


module.exports = User;
