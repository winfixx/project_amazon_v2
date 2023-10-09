const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const { Product } = require('./product-model');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    avatar: { type: DataTypes.STRING },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activationLink: { type: DataTypes.STRING },
})

const Favourites = sequelize.define('favourites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, defaultValue: ''},
    image: {type: DataTypes.STRING, allowNull: false, defaultValue: ''}
})

const Cart = sequelize.define('cart', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Review = sequelize.define('review', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING }
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: {type: DataTypes.STRING},
})

const OrderItem = sequelize.define('order_item', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING, allowNull: false}
})

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Cart)
Cart.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(OrderItem)
OrderItem.belongsTo(User)

User.hasMany(Favourites)
Favourites.belongsTo(User)

OrderItem.hasMany(Order)
Order.belongsTo(OrderItem)

Product.hasOne(OrderItem)
OrderItem.belongsTo(Product)

Product.hasOne(Favourites)
Favourites.belongsTo(Product)

Product.hasOne(Cart)
Cart.belongsTo(Product)

module.exports = {
    User,
    Favourites,
    Cart,
    Review,
    Order,
    OrderItem
}