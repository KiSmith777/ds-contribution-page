import styled from 'styled-components';

export const Nav = styled.nav`
background: rgb(8, 12, 17) none repeat scroll 0% 0%;
height: 80px;
font-size: 20px;
position: sticky;
z-index: 10;
width: 100vw;
color: rgb(231, 223, 221);
display: flex;
justify-content: center;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
color: #e7dfdd;
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1440px;
margin: 0 16px;


`;

export const NavLogoContainer = styled.div`
height: 80px;
width: 230px;
font-weight: bold;
text-decoration: none;
display: flex;
justify-content: space-between;

@media screen and (max-width: 600px) {
  justify-content: left;
  width: 170px;
}
`;

export const NavLogo = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 5px;
`

export const NavLogoText = styled.div`
color: #e7dfdd;
cursor: default;
font-size: 1.5rem;
display: flex;
align-items: center;

font-weight: bold;
text-decoration: none;

@media screen and (max-width: 600px) {
  margin-left: 8px;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 68px;

@media screen and (max-width: 600px) {
  margin-right: 0;
}
`;



export const NavItem = styled.li`
height: 80px;
display: flex;
`;


export const NavText = styled.div`
color: #e7dfdd;
display: flex;
align-items: center;
text-decoration: none;
font-weight: 700;
height: 100%;
cursor: default;
width: 212px;

@media screen and (max-width: 600px) {
  display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
width: 144px;

@media screen and (max-width: 600px) {
  justify-content: right;
}
`;

export const NavBtnLink = styled.div`
border-radius: 12px;
background: #0C70F2;
white-space: nowrap;
padding: 10px 22px;
color: #e7dfdd;
font-size: 16px;
font-weight: 700;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: background 0.2s ease 0s;
  background: #e7dfdd;
  color: #010606;
}

@media screen and (max-width: 600px) {
  padding: 10px 16px;
}
`;