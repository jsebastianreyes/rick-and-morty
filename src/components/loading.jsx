import styled from 'styled-components'

const LoadingStyled = styled.div`

 block-size: 30rem;
 background: white;
 display: flex;
 /* flex-direction: column; */
 justify-content: center;
 align-items: center;
 padding: 2rem;
`

function Loading() {
    return (
        <LoadingStyled>
         <img src='../../public/rick-and-morty-dance.gif' height="300"/>
        </LoadingStyled>
    )
}

export default Loading
