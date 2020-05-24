const path = require('path');
const express = require('express');
const app = express();

// View configuration
app.set('view engine', 'pug');
app.set('views', './views/pages');

// Logs all requests to the terminal
const logger = (req, res, next) => {
    const formatBlue = str => {
        const blueBegin = "\x1b[34m";
        const blueEnd = "\x1b[0m";
        return `${blueBegin}${str}${blueEnd}`;
    };

    console.log(formatBlue(req.method + " " + req.originalUrl));
    next();
};
app.use(logger);

// Make /public folder public, so that a request like GET /favicon.ico will automatically
//     be handled by sending HTTP 200 along with /public/favicon.ico as the response
const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

// Look inside /routes/index.js for the code handling requests
app.use("/", require("./routes/index"));

// This is what allows us to use our server on PORT 3000
app.listen(3000, () => console.log("Server listening at http://localhost:3000"));
