import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Title = styled.h1`
margin:20px;
`;

const FilterContainer = styled.div`
 display:flex;
 justify-content: space-between;
`;

const Filter = styled.div`
margin:20px;
`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:10px;
`;
 
const Select = styled.select`
padding: 10px;
margin-right:20px;
`;
const Option = styled.option``;
 

const ProductList = () => {
  return (
    <Container>
      <NavBar/>
      <Announcement/>


      <Title>Products</Title>
      <FilterContainer>
        <Filter> <FilterText>Filtered Products</FilterText></Filter>
        <Select>
            <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>        
        </Select>
        <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>        
        </Select>
        <Filter><FilterText>Sorted Products</FilterText></Filter>
        <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>      
        </Select>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
