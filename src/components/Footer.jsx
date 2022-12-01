import { Facebook, Instagram, MailOutline,  Phone, Pinterest, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"

const Container =styled.div`
display:flex;
`;
const Left =styled.div`
flex:1;
display:flex;
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
`;


const Right =styled.div`
flex:1;
padding:20px;
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
                expedita fuga dolorem facilis itaque ducimus corporis, sapiente tempora, illum sed enim veritatis consequatur ea voluptatum. Deserunt 
                consectetur a asperiores reprehenderit labore ipsum nam placeat adipisci, corporis odio iure repellat quia iusto quis aliquam molestias 
                natus error neque ratione accusamus. 
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

              <SocialIcon color="C453DE">
                <Pinterest/>
              </SocialIcon>

              <SocialIcon color="BD453F">
                <WhatsApp/>
              </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
          </List>
        
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
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
