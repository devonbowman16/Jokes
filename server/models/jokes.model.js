const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Jokes need to have words..."],
        min: [5, "Jokes must be at least 5 characters long..."]
    },
    punchline: {
        type: String,
        required: [true, "All jokes have a comedian!"]
    }
})

const Joke = mongoose.model("Joke", JokeSchema)


module.exports = Joke;