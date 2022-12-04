// import { Icon } from '@material-ui/core';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items: center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
`;



const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items: center;
justify-content:center;
background-color:#f5fbdf;
position:relative;


&:hover ${Info}{
  opacity:1;
  }
`;

const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`;

const Image = styled.img`
height:65%;
z-index:2;
`;



const Icons = styled.div`
width:40px;
heigth:40px;
background-color:white;
border-radius:50%;
display:flex;
align-items: center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
  }
`;

const ProductComponent = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icons>
          <ShoppingCartOutlined/>
        </Icons>
        <Icons> 
          <SearchOutlined/>
        </Icons>
        <Icons>
          <FavoriteBorderOutlined/>
        </Icons>
      </Info>
      
    </Container>
  )
}

export default ProductComponent
