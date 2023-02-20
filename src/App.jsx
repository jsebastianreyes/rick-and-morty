import Layout from './components/layout'
import Form from './components/form'
import Characters from './components/characters'
import Header from './components/header'
import Navigation from './components/navigation'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'


function App() {
  const {movies, getMovies, info, query} = useMovies()
  return (
    <Layout>
     <Header>
        <Form  getMovies={getMovies} query={query}/>
      </Header>
      <Characters listMovies={movies} />
      {info ? <Navigation info={info} query={query} getMovies={getMovies} /> : null}
    </Layout>
  )
}

export default App
