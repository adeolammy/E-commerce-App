import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
flex:1;
margin:3px;
position:relative;
 height:70vh;
`;
const Image = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 ${mobile({height:"20vh"})}
`;
const Info = styled.div`
 width:100%;
 height:100%;
 top:0;
 left:0;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
color:white;
margin-bottem:20px;
`;

const Button = styled.div`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`;

const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>


    </Container>
  )
}

export default CategoriesItem
