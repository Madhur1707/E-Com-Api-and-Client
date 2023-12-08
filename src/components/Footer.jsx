import { Facebook, Instagram, LocationOn, Mail,  Phone, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin:0 ;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;
`
const Payment = styled.img`
width: 100%;

    
`

 

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Dropie.com</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          velit. Consequuntur molestiae, quas iste quibusdam ut quisquam rerum
          cupiditate voluptate, blanditiis velit pariatur hic nesciunt alias
          fugit ex illo cumque.
        </Description>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
           <LocationOn style={{marginRight:"10px"}} /> Gwalior, Madhya Pradesh, India.
        </ContactItem>
        <ContactItem>
       <Phone style={{marginRight:"10px"}} />  +918960629039
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:"10px"}} /> madhurpathak000@gmail.com
        </ContactItem>
    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
