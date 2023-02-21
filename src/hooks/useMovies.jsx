import { useState, useEffect, useCallback } from "react";
import { getMoviesAPI } from "../services/getmovies";

export function useMovies(){
  const [movies, setmovies] = useState([])
  const [info, setInfo] = useState([])
  const [query, setQuery] = useState(null)
  const [loading, setLoading] = useState(null)

  const getMovies = useCallback(

    async (character, numPage) => {
      //loading
      setLoading(true)
      const {listMovies, info} = await getMoviesAPI(character, numPage)
      setLoading(false)
      //loading
      setmovies(listMovies)
      setInfo(info)
      setQuery(character)
      // alert('no')
  }, []

  )

    useEffect(()=> {
        getMovies('',1)
      },[])  


    return {movies, getMovies, info, query, loading}
}