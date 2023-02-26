import styled from 'styled-components'
import { useState, useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'

const FormStyled = styled.form`
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    gap: .5rem;

    & input[type='text']{
        font-size: 1.1rem;
        border-radius: .4rem;
        padding: .5rem 1.2rem;
        /* max-inline-size: 220px; */
        outline: 0;
        background: #ffffff96;
    }

    button{
        background: var(--bg);
        border-radius: .4rem;
        color: white;
        cursor: pointer;
        border: 0;
        padding: .4rem 1rem;
    }

    button span{
        font-size: 1.3rem;
        transform: rotate(90deg);
    }

    button:active{
        transform: scale(.9)
    }

    @media screen and (min-width:768px) {
    & input[type='text']{
    inline-size: 400px;
    }
   }
`


function Form({getMovies}) {
    
    useEffect(()=> {
        console.log('cambio')
    },[getMovies])

    const debouncedGetCharacter = 
        debounce((query) => {
            getMovies(query)
        }, 300)

    //TODO: Hacer debounce
    
    const [search, setSearch] = useState('')

    function handleChange(e){
        const query = e.target.value
        setSearch(query)
        debouncedGetCharacter(query)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        if(formData.get('search') != query){
        getMovies(formData.get('search'))
        }
        
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <input value={search} onChange={handleChange} name="search" type="text" placeholder='Rick, Morty Smith, Beth Smith... '/>
            <button> <span>🔍</span></button>
        </FormStyled>
    )
}

export default Form
