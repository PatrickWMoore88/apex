const express = require("express");
const router = express.Router();
const models = require("../models");

function authenticate(req, res, next){
    if(!req.session.user_id){
        res.redirect("/login");
    }else{
        next();
    }
};

router.get("/", async (req,res) =>{
    let data = {};
    data.movies = await models.movies.findAll();
    res.render("explore", data)
});

router.get("/:title", async (req,res) =>{
    let data = {};
    data.movies = await models.movies.findOne({where: {title: req.params.title}});
    req.session.movie_id = data.movies.dataValues.id;
    res.render("movie", data)
});

module.exports = router;