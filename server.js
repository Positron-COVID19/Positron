const express = require('express');
const app = express();

// View configuration
app.set('view engine', 'pug');
app.set('views', './views/pages');

// Logs all requests to the terminal
const logger = (req, res, next) => {
    console.log(`\x1b[34m${req.method} ${req.originalUrl}\x1b[0m`);
    next();
};
app.use(logger);

// Look inside /routes/index.js for the code handling requests
app.use("/", require("./routes/index"));

// This is what allows us to use our server on PORT 3000
app.listen(3000, () => console.log("Server listening at http://localhost:3000"));
