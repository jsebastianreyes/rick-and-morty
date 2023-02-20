import styled from 'styled-components'
import Character from './character'
import NotFound from './not-found'

const CharactersStyled = styled.main`
        max-inline-size: 82rem;
        padding-inline: 1.5rem;
        margin: auto;
        margin-block: 3rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-columns: minmax(200px);
        column-gap: 2rem;
        row-gap: 2rem;

        @media screen and (min-width:768px) {
         &{
            grid-template-columns: 1fr 1fr;

         }     
        }
`

function Characters({listMovies}) {
    if(listMovies){
        return( 
        <CharactersStyled>
                        { listMovies?.map((item) => {
                            return <Character key={item.id} {...item}/>
                        }) }
                </CharactersStyled>
        )
    }
    else{
        return( <NotFound/> )  
    }
}

export default Characters
