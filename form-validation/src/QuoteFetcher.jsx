import { useState,useEffect} from "react";
const Random_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcheer(){
    const[quote,setQuote]=useState({text:"",author:""})
    const[isLoading,setIsLoading] = useState(true);
    async function fetchQuote(){
        const response = await fetch(Random_URL)
        const jsonResponse = await response.json();
        const RandomQuote = jsonResponse.quote;
        setQuote(RandomQuote)
        setIsLoading(false)
    }
    useEffect(()=>{
        fetchQuote();
    },[]);

    return(
        <div>
            {/* <button onClick={fetchQuote}>Get Quote</button> */}
            {isLoading && <h3>Loading...</h3>}
            <h1>{quote.text}</h1>
            <h2>{quote.author}</h2>
        </div>
    )
}