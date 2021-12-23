import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    useEffect(async () => {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json.results);
    }, []);
  
    return response;
};