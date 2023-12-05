import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f4ecec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto; 
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
  align-items: center;
`
const ImgContainer=styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
  height: 80%;
`
const InfoContainer =styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
  return (
<Container>
<Arrow direction='left'>
<ArrowLeftIcon/>
</Arrow>
<Wrapper>
  <Slide>
<ImgContainer>
<Image src="https://spaceandlight.la/wp-content/uploads/2022/03/ecommerce-on-model-header-3.jpg"/>
</ImgContainer>
<InfoContainer>
  <Title>Winter Sale</Title>
  <Desc>Dont Compromise On Style! Get Flat 30% Off for New Arrivals</Desc>
  <Button>Shop Now</Button>
</InfoContainer>
</Slide>
</Wrapper>
<Arrow direction='right'>
    <ArrowRightIcon/>
</Arrow>
</Container>
  )
}

export default Slider