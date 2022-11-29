import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
background-color: black; 
`
const Wrapper = styled.div`
padding: 10px 20px;
 
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper> 
          NavBar
      </Wrapper>
    </Container>
  )
}

export default NavBar
