const Joke = require ("../models/jokes.model");


module.exports.peeps = (req,res) =>{
    res.json ({message: "Hello peeps"});
}


//gets all jokes
module.exports.allJokes = (req, res)=>{
    Joke.find()
    .then(allJokes=>{
        res.json({results: allJokes})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

//finds one joke
module.exports.oneJoke = (req, res)=>{
    console.log("Finding Joke!");
    Joke.findOne({_id:req.params.id})
        .then(oneJoke =>{
            res.json({results: oneJoke})
        })
        .catch(err=>{
            res.json({err:err})
        })
}




//creates a new joke
module.exports.newJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJokeObject=>{
            res.json({results: newJokeObject })
        })
        .catch(err=> {
            res.json({err:err})
        })
}

//updates a joke
module.exports.updateJoke = (req,res)=>{
    Joke.updateOne({_id:req.params.id}, req.body, {new: true, runValidators: true} )
    .then(updatedJoke => {
        res.json({results: updatedJoke})
    })
    .catch(err=> {
        res.json({err:err})
    })
}

//deletes a joke
module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=> {
            res.json({err:err})
        })
    }