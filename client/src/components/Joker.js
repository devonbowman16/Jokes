import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Joker = () => {
    const [allJokes,setAllJokes] = useState([]);

    useEffect(() =>{
        axios.get("https://localhost:8000/api/jokes")
            .then(res =>{
                console.log("Response from backend", res)
                setAllJokes(res.data.results)
            })
            .catch(err=> {
                res.json({err:err})
            })
        },[])
    return (
        <div>
            {allJokes.map((joke,i) =>{
                return <div>
                    {joke.setup}
                    {joke.punchline}
                </div>

                
            })}
        </div>
    );
};


export default Joker;