import {
  Circle,
  Info,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Icon } from "@mui/material";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
