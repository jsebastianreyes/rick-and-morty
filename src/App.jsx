import Layout from './components/layout'
import Form from './components/form'
import Characters from './components/characters'
import Header from './components/header'
import Navigation from './components/navigation'
import { useMovies, useEffecft } from './hooks/useMovies'
import Loading from './components/loading'


function App() {
  const {movies, getMovies, info, query, loading} = useMovies()
  useEffect(()=> {
    console.log('Yess 🤓')
  },[query])
  
  return (
    <Layout>
     <Header>
        <Form  getMovies={getMovies} query={query}/>
      </Header>
      {loading ? <Loading/> :   <Characters listCharacters={movies} /> }
      {info ? <Navigation info={info} query={query} getMovies={getMovies} /> : null}
    </Layout>
  )
}

export default App
