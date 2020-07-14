import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Nav from './nav'
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 65rem;
  margin: 2rem auto;
  @media screen and (max-width: 775px) {
    flex-direction: column;
    max-width: none;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 20rem;
  }
`;

function Header() {
  // const [act, setAct] = useState(0)
  // function onClick(e) {
  //   console.log(e)
  // }
  return (
    <Container>
      <Logo />
      <Nav />
    </Container>
)
}

export default Header
