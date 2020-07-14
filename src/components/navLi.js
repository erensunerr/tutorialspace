import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: #717171;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: ${props => props.current ? "#717171 2px solid" : "none"} ;
  margin: .5rem;
  &:hover {
    color: #1792D2;
  }
  @media screen and (max-width: 450px) {
    max-width: none;
    margin: .25rem;
    display: inline-block;
  }
`

function NavLi(props) {
  console.log(props);

  return (
    <li><A href={props.href ? props.href : "#"} current={props.current}>{props.children}</A></li>
  )
}

export default NavLi
