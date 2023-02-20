// https://rickandmortyapi.com/api/character/?page=1&name=rick

export async function getMoviesAPI(search, numPage=1){
    try{
        const character = search ? `&name=${search}` : ''
        // console.log(`search: ${search}`)
        // console.log(`https://rickandmortyapi.com/api/character/?page=${numPage}${character}`)
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${numPage}${character}`)
        const data = await res.json()
        return { listMovies: data.results, info: data.info}
    }
    catch(e){
        throw new Error('error buscando peliculas')
    }

   
    
}