import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive";



const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px; 
display: flex;
align-item: center;
justify-content: space-between;
${mobile({padding:"10px 0"})}
`;

const Left = styled.div `
flex: 1;
display:flex;
align-item: center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
` 
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-item:center ;
margin-left: 25px;
padding:5px;
`;

const Input = styled.div`
border:none;
padding:0 4rem;
${mobile({width:"50px"})}
`;
const Logo = styled.h1`
font-weight: bold;
color:deepblue;
${mobile({fontSize:"24px"})}
`;

const Center = styled.div `
text-align: center;
flex: 1;
`;

const Right = styled.div `
display: flex;
align-items: center;
justify-content: flex-end;
flex: 1;
${mobile({flex: 2 ,justifyContent :"center"})}
`;

const MenuItem = styled.div `
font-size: 14px;
cursor:pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft: "10px" })}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper> 
          <Left>
          <Language> EN  </Language> 
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:'gray', fontSize:16}}/>
          </SearchContainer>
         </Left>
          <Center> 
            <Logo>OLAMMY</Logo> 
          </Center>
          <Right> 
            <MenuItem> REGISTER</MenuItem>
            <MenuItem> SIGN IN</MenuItem>
            <MenuItem> 
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
