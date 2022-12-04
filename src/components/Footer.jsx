import { Facebook, Instagram, MailOutline,  Phone, Pinterest, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive"

const Container =styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`;

const Left =styled.div`
flex:1;
display:flex;
padding:20px;
flex-direction:column;
padding:20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin:20px 0;
`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center =styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;


const Right =styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"lightgray"})}
`;

const ContactItem =styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`;
const Payment =styled.img`
width:50%;
`;


const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%; 
margin-bottom:20px;
`;








const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>OLAMMY.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis veniam sapiente adipisci aliquam nemo maxime autem debitis! At molestias,
                expedita fuga dolorem facilis itaque. 
            </Desc>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook/>
              </SocialIcon>

              <SocialIcon color="E4405F">
                <Instagram/>
              </SocialIcon>

              <SocialIcon color="55ACEE">
                <Twitter/>
              </SocialIcon>

              <SocialIcon color="E4405F">
                <Pinterest/>
              </SocialIcon>

              <SocialIcon color="43ff64d9">
                <WhatsApp/>
              </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
                 
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Children Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/> 45 Willton Close, Northern Avenue 9876784</ContactItem>
          <ContactItem><Phone/> +45 345 664 876</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@olammy.org</ContactItem>
          <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
