const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static("public"));

connection
    .authenticate()
    .then(()=>{
        console.log("Conected whit db");
    })
    .catch((error)=>{
        console.log(error);
    })

app.use("/",categoriesController);

app.use("/",articlesController);

app.get("/",(req,res)=>{
    Article.findAll().then(articles=>{
        res.render("index",{articles:articles});
    })
    
});

app.listen(8080,()=>{
    console.log("Working");
});

