import { useEffect, useState } from "react";
import axios from 'axios'

const Trends = () => {
  const [jokes, setJokes] = useState({
    chuckjoke: "",
    picture: null
  })

    useEffect(()=> {
const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    accept: 'application/json',
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

axios.request(options).then((response) => {
	console.log(response.data["url"]);
  setJokes({
    chuckjoke: response.data["value"],
    picture: response.data["url"]
  })
}).catch((error)=> {
	console.error(error);
});

    }, [])

  return (
    <div className="trends">
   <div className="jokes">
<img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="Wedding" />
  <p>{jokes.chuckjoke}</p>
   </div>

    </div>
  );
}

export default Trends;
