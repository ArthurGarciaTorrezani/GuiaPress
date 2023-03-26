const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type:Sequelize.STRING, // short text
        allowNull:false
    },slug:{
        type:Sequelize.STRING,
        allowNull:false
    },body:{
        type:Sequelize.TEXT, // long text
        allowNull:false
    }
});

Category.hasMany(Article); // an category have many  articles
Article.belongsTo(Category); // an artcile belong to a category



module.exports = Article;
// create the tables of database