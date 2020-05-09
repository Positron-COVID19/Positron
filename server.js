const express = require('express');
const app = express();                          
app.set('view engine', 'pug');
app.set('views', './');

app.get("/", (request, response) => {
    // Cambia navbar por el nombre del archivo que vas a usar
    response.render("navTut", {});
});

// This is whar allows us to use our server on PORT 3000
app.listen(3000, () => console.log("Server listening at http://localhost:3000"));