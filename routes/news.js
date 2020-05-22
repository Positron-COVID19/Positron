const routes = require("express").Router();

// This is actually referring to /news
routes.get("/", (request, response) => {
    const dummyArticles = require('../data/dummyArticles.json');

    response.render("news/index", { articles: dummyArticles });
});

module.exports = routes;