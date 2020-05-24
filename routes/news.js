const routes = require("express").Router();

const faker = require("faker");
faker.seed(12345);

// This is actually referring to /news
routes.get("/", (request, response) => {
    const dummyArticles = [
        {
            headline: "Sunnyvale company wins FDA approval for first rapid coronavirus test with 45-minute detection time",
            subheadline: faker.lorem.sentence(),
            imageUrl: "https://www.mercurynews.com/wp-content/uploads/2020/03/SJM-L-CEPHEID-0322-2.jpg?w=1024&h=683",
            author: faker.name.findName()
        },
        {
            headline: "Roche antibody test that’s 100% accurate approved in breakthrough that could help ease UK coronavirus",
            subheadline: faker.lorem.sentence(),
            imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2020/05/DD-COMPOSITE-CORONA-TESTING.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            author: faker.name.findName()
        },
        {
            headline: "'Parks and Recreation' cast returning for scripted special to benefit coronavirus relief",
            subheadline: faker.lorem.sentence(),
            imageUrl: "https://static.foxnews.com/foxnews.com/content/uploads/2020/04/Parks-and-Rec-cast.jpg",
            author: faker.name.findName()
        }
    ];

    response.render("news/index", { articles: dummyArticles });
});


//Refers to /news/123
routes.get("/:newsID", (request, response) => {
    let index = parseInt(request.params.newsID);

    const dummyArticle = [
        {
            headline: "Sunnyvale company wins FDA approval for first rapid coronavirus test with 45-minute detection time",
            subheadline: faker.lorem.sentence(),
            paragraph: faker.lorem.paragraphs(),
            imageUrl: "https://www.mercurynews.com/wp-content/uploads/2020/03/SJM-L-CEPHEID-0322-2.jpg?w=1024&h=683",
            author: faker.name.findName()
        },
        {
            headline: "Roche antibody test that’s 100% accurate approved in breakthrough that could help ease UK coronavirus",
            subheadline: faker.lorem.sentence(),
            paragraph: faker.lorem.paragraphs(),
            imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2020/05/DD-COMPOSITE-CORONA-TESTING.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            author: faker.name.findName()
        },
        {
            headline: "'Parks and Recreation' cast returning for scripted special to benefit coronavirus relief",
            subheadline: faker.lorem.sentence(),
            paragraph: faker.lorem.paragraphs(),
            imageUrl: "https://static.foxnews.com/foxnews.com/content/uploads/2020/04/Parks-and-Rec-cast.jpg",
            author: faker.name.findName()
        }
    ];

    response.render("articleView", {article: dummyArticle[index]});
});

module.exports = routes;