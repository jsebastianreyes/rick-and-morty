import styled from 'styled-components'
import img from '../assets/morty-sad.png'

const NotFoundStyled = styled.div`
    margin-block: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: #fff;
    justify-content: center;

    img{
        inline-size: 100%;
        margin-block-start: 1rem;
    }

    p{
        font-size: .9rem;
    }

    img{
        block-size: 200px;
        inline-size: auto;
    }

    h1, p {
        margin: 0;
    }
`

function NotFound() {
    return (
        <NotFoundStyled>
          <h1>UPSSSS! 🙁</h1>  
          <p>No encontramos resultados para tu búsqueda</p>
          <img src={img} alt="" srcset="" />
         
        </NotFoundStyled>
    )
}

export default NotFound
