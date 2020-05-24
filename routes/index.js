const routes = require("express").Router();

routes.get("/", (request, response) => {
    // Renders /views/pages/index.pug, passing in empty parameters
    //     and sends HTTP 200 with the rendered HTML
    response.render("index", {});
});

routes.use("/news", require("./news"));

module.exports = routes;