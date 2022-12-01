import { Send } from "@material-ui/icons";
import styled from "styled-components"


const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
`;
const Title = styled.h1``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.div``;


const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates form your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
