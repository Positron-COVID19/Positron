const routes = require("express").Router();

routes.get("/", (request, response) => {
    response.render("about", {});
});

module.exports = routes;