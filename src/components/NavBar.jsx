import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons"

const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px; 
display: flex;
align-item: center;
justify-content: space-between;
`;

const Left = styled.div `
flex: 1;
display:flex;
align-item: center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
` 
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-item:center ;
margin-left: 25px;
padding:5px;
`;

const Input = styled.div`

`;

const Center = styled.div `flex: 1;`;
const Right = styled.div `flex: 1;`;


const NavBar = () => {
  return (
    <Container>
      <Wrapper> 
          <Left>
          <Language> EN  </Language> 
          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
         </Left>
          <Center> center </Center>
          <Right> right </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
