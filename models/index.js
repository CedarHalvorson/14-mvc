const User = require('./User')
const Post = require('./Post')
const Comments = require('./Comments')

Post.belongsTo(User,{
    foreignKey: 'user_Id', onDelete: 'CASCADE'
})
Post.hasMany(Comments,{
    foreignKey: 'post_Id', onDelete: 'CASCADE'
})
Comments.belongsTo(User,{
    foreignKey: 'user_Id', onDelete: 'CASCADE'
})

module.exports = {
    User,
    Post,
    Comments
  }