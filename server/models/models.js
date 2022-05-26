const sequelize = require('../db')
const {DataTypes} = require('sequelize');

const User = sequelize.define('User',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Messages = sequelize.define( 'Message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userReceiveId: {type: DataTypes.INTEGER},
    message: {type: DataTypes.STRING}
})

const Chat = sequelize.define('Chat',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userReceiveId: {type: DataTypes.INTEGER}
})

const Car = sequelize.define( 'Car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country: {type: DataTypes.STRING},
    brand: {type: DataTypes.STRING},
    model: {type: DataTypes.STRING}
})

const Publication = sequelize.define( 'Publication', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.DECIMAL},
    img: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

const Comment = sequelize.define( 'Comment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING}
})

Car.hasOne(Publication)
Publication.belongsTo(Car)

User.hasOne(Comment)
Comment.belongsTo(User)

Publication.hasOne(Comment)
Comment.belongsTo(Publication)

User.hasOne(Publication)
Publication.belongsTo(User)

User.hasMany(Messages)
Messages.belongsTo(User)

Chat.hasMany(Messages)
Messages.belongsTo(Chat)

User.hasMany(Chat)
Chat.belongsTo(User)

module.exports = {
    User,
    Messages,
    Chat,
    Car,
    Publication,
    Comment
}