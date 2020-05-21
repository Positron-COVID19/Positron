const routes = require("express").Router();

const faker = require("faker");
faker.seed(12345);

// This is actually referring to /news
routes.get("/", (request, response) => {
    const dummyArticles = [
        {
            headline: "Boss Who Turned Herself Into a Potato During Video Conference Is a Root Vegetable Comedy Legend",
            subheadline: faker.lorem.sentence(),
            source: "Time USA",
            url: "https://time.com/5813683/boss-turns-herself-into-a-potato/",
            imageUrl: "https://pbs.twimg.com/media/EUXiJW0XQAIBUX6?format=jpg&name=medium",
            author: faker.name.findName()
        },
        {
            headline: "Atlanta Humane Society lets puppies roam aquarium closed due to coronavirus",
            subheadline: faker.lorem.sentence(),
            source: "The Hill",
            url: "https://thehill.com/blogs/blog-briefing-room/news/489706-atlanta-humane-society-lets-puppies-roam-aquarium-closed-due-to",
            imageUrl: "https://media.nbcchicago.com/2019/09/WMAQ_100000007720579.jpg",
            author: faker.name.findName()
        },
        {
            headline: "Orangutan demonstrates hand-washing",
            subheadline: faker.lorem.sentence(),
            source: "ABC News",
            url: "https://abcnews.go.com/International/video/orangutan-demonstrates-hand-washing-69672120https://time.com/5813683/boss-turns-herself-into-a-potato/",
            imageUrl: "https://img.srgcdn.com/e//SmNaT0hJQWxpcWhBSWRUVmJtam8ucG5n.jpg",
            author: faker.name.findName()
        }
    ];

    response.render("news/index", { articles: dummyArticles });
});

module.exports = routes;