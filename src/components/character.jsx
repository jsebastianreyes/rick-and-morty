import styled from 'styled-components'
import Location from '../assets/location'

const CharacterStyled = styled.article`

    display: flex;
    flex-wrap: nowrap;
    background: #3c3e44;
    color: #fff;
    border-radius: .7rem;
    overflow: hidden;

    & p {
        margin: 0;
        padding: 0;

    }

    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        flex: 1;
        padding: 1rem;
        gap: .5rem;
    }
    .name{
        font-size: 1.4rem;
        font-weight: 900;
    }

    .img{
        inline-size: 120px;
        object-fit: cover;
        
    }

    .status{
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .status::before{
        content: '';
        display: inline-block;
        inline-size: 10px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    .status.alive:before{
        background-color: green;
    }
    .status.dead:before{
        background-color: red;
    }
    .status.unknown:before{
        background-color: white;
    }

    .info-details{
        display: flex;
        gap: .5rem;
    }

    .location{
        color: #9e9e9e;
    }

    @media screen and (min-width:991px) {
        .name{
         font-size: 1.8rem;
        }
    }

    @media screen and (min-width:768px) {
        
        .img{
        inline-size: 190px;
        object-fit: cover;
        
    }
   }

`

function Character(character) {
    // console.log(character)
    return (
        <CharacterStyled>
            <img className="img" src={character.image}  alt={character.name} width="200"/>
            <div className="info">
                {character.name ? <p className='name'>{character.name}</p> : null}
                <div className='info-details'>
                {character.status ? <p className={`status ${character.status.toLowerCase()}`}>{character.status}</p> : null}
                <span>-</span>
                {character.species ? <p className='specie'>{character.species}</p> : null }
                </div>
                <p className='location'>Last known location:</p>
                {character.location.name ? <p className=''><span> {<Location size={14} color={'white'}/>} </span>{character.location.name}</p> : null }
            </div>
        </CharacterStyled>
    )
}

export default Character
