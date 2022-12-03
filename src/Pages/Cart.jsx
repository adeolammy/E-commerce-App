import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";



const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
 
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;

const Info = styled.div`
flex:3;
`; 

const TopTexts = styled.div``;

const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;
`;

const Product = styled.div`
 display:flex;
 justify-content:space-between;
`;
const ProductDetail = styled.div`
 display:flex;
flex:2;
`;
const Image = styled.img`
width:200px;

`;
const Details = styled.div`
 display:flex;
padding:20px;
flex-direction:column;
 justify-content:space-around;

`;

const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};

`;
const ProductName = styled.div``;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount  = styled.div`
 font-size:24px;
 margin;5px;
`;
const ProductPrice = styled.div`
 font-size:30px;
 font-weight:200;

`;
const Hr = styled.div`
background-color:#eee;
border:none;
 height:2px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:20px;
height:50vh ;
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;

const SummaryItem = styled.div`
margin:30px 0;
display:flex;
 justify-content:space-between;
 font-weight: ${props => props.type === "total" && "500"};
 font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
width:100%;
background-color:black;
padding:10px;
color:white;
font-weight:600;

`;






const Cart = () => {
  return (
    <Container>
      <NavBar/>
      <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping bags(2)</TopText>
                    <TopText>Your Wish List (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://freepngimg.com/thumb/dress%20shirt/17-dress-shirt-png-image-thumb.png"/>
                            <Details>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID:</b>987656789</ProductId>
                                <ProductColor color="blue"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                 <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://freepngimg.com/thumb/shoes/28172-8-nike-shoes-image-thumb.png"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>7890987656789</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>3.43</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                 <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 40</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle> ORDER SUMMARY</SummaryTitle>
                    
                    <SummaryItem>
                        <SummaryItemText> Subtotal</SummaryItemText>
                        <SummaryItemText> $ 80</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Estimated Shipping</SummaryItemText>
                        <SummaryItemText> $ 6.80</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Shipping Discount</SummaryItemText>
                        <SummaryItemText> $ -3.80</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText > Total</SummaryItemText>
                        <SummaryItemPrice> $ 122.80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
