const routes = require("express").Router();

routes.get("/", (request, response) => {
    // Renders /views/pages/index.pug, passing in empty parameters
    //     and sends HTTP 200 with the rendered HTML
    response.render("index", {});
});

routes.get("/about", (request, response) => {
    response.render("about", {});
});

module.exports = routes;