import { useState, useEffect, useCallback } from "react";
import { getMoviesAPI } from "../services/getmovies";

export function useMovies(){
  const [movies, setmovies] = useState([])
  const [info, setInfo] = useState([])
  const [query, setQuery] = useState(null)

  const getMovies = useCallback(

    async (character, numPage) => {
      const {listMovies, info} = await getMoviesAPI(character, numPage)
      setmovies(listMovies)
      setInfo(info)
      setQuery(character)
  }, []

  )

    useEffect(()=> {
        getMovies('',1)
      },[])  


    return {movies, getMovies, info, query}
}