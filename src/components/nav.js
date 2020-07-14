import React from 'react'
import styled from 'styled-components'
import NavLi from './navLi'

const Navig = styled.nav`
  color: blue;
  display: flex;
  align-items: flex-end;
  margin: 0 1rem;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 775px) {
    margin: 1rem auto;
    justify-content: space-between;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`

function Nav() {
  // const [act, setAct] = useState(0)
  // function onClick(e) {
  //   console.log(e)
  // }
  // TODO: get elements from props.
  return (
      <Navig>
        <Ul>
          <NavLi current>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>Recent Posts</NavLi>
        </Ul>
      </Navig>
)
}

export default Nav
