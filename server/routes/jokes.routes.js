const JokeController = require("../controllers/jokes.controller");

module.exports = app =>{
    app.get("/api", JokeController.peeps);
    app.get("/api/jokes", JokeController.allJokes);
    app.post("/api/jokes", JokeController.newJoke);
    app.get("/api/jokes/:id", JokeController.oneJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}