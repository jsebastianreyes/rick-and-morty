import styled from 'styled-components'

const WrapperStyled = styled.div`
    max-inline-size: 82rem;
    margin: auto;
    padding-inline:1.5rem;
   
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
