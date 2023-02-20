import styled from 'styled-components'
import { useRef } from 'react'

const NavigationStyled = styled.div`
   display: flex;
   justify-content: center;
   margin-block: 2rem;
   gap: .5rem;
   button{
    font-size: 2rem;
    background: #3c3e44;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   }

   button.disabled{
    cursor: not-allowed;
    opacity: .5;
   }


`

function Navigation({info, query, getMovies}) {
  // console.log(`Query: ${query}`)
  const counter = useRef(1)
  const previusSearch = useRef(query)
  const prev = info.prev ? '' : 'disabled'
  const next = info.next ? '' : 'disabled'
  
  function handleNext(){
    if(previusSearch.current != query) counter.current = 1
    if(info.next === null) return
    const newCounter = counter.current + 1
    getMovies(query, newCounter)
    previusSearch.current = query
    counter.current = newCounter
    window.scrollTo({
      top: 380, 
      behavior: 'smooth'
    });
    console.log(counter.current)
    console.log(`prev:${previusSearch.current}`)
    console.log(`QUERY ${query}`)
   }

   function handlePrev(){

    if(previusSearch.current != query) counter.current = 1
    if(info.prev === null) return
    const newCounter = counter.current - 1
    getMovies(query, newCounter)
    counter.current = newCounter
    window.scrollTo({
      top: 380, 
      behavior: 'smooth'
    });

   }
    return (
        <NavigationStyled>
            {info.pages > 1 ?
              <>
                <button className={prev} onClick={handlePrev}>←</button>
                <button className={next} onClick={handleNext}>→</button>
              </>
              : null
            }
        </NavigationStyled>
    )
}

export default Navigation
