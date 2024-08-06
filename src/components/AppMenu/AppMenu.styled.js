import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100px;
  background-color: #09217B;
  padding-top: 15px;
  padding-right: 40px;
  padding-left: 40px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ECECEC;
  width: 100%;
  height: 100px;
`;

const SpaceContainer = styled.div`
justify-content: space-between;
`;

const List = styled.ul`
 display: flex;
 flex-direction: row;
 margin: 0 ;
 padding: 0;
 list-style:none;
`;

const Head = styled.h1`
font-family: 'Inter';
font-weight: 700;
font-size: 36px;
line-height: 1.21;
color: #FFFFFF;
margin-right: 210px;
`;

const HeaderItem = styled.li`
margin-right: 50px;
`;

const HeaderLink = styled.a`
text-decoration: none;
color: #FFFFFF;
`;

const HeaderButton = styled.button`
margin-left: auto;
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 1.21;
text-align: center;
width: 171px; 
height: 51px; 
border-radius: 10px;
// background-color: #0ce8ad;
cursor:pointer;
color: #4C4C4C; 
background-color: ${props => (props.isActive ? '#FF6347' : '#0ce8ad')}; /* Change color when active */
  color: #4C4C4C;
  transition: background-color 0.1s ease;

  &:active {
    background-color: #FF6347; /* Change this to your desired active color */
  }
`;




export { HeaderContainer, Container, List, Head, HeaderItem, SpaceContainer, HeaderLink, HeaderButton };
