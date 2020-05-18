const routes = require("express").Router();

// Handle home page
routes.get("/", (request, response) => {
    // Renders /views/pages/index.pug, passing in empty parameters
    //     and sends HTTP 200 with the rendered HTML
    response.render("index", {});
});

// Handle other pages using the other routers
routes.use("/news", require("./news"));     // NOTE: any route *prefixed* with /news will get
                                            //     routed to the news router, including /news/123

module.exports = routes;