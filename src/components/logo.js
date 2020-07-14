import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 22rem;
  text-align: center;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 775px) {
    max-width: none;
    margin: 0 auto;
  }
  @media screen and (max-width: 450px) {
    max-width: 10.5rem;
    margin: 0 auto;
  }
`

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: #143774;
  text-align-last: justify;
  text-align: justify;
`

const SubTitle = styled.p`
  text-align-last: justify;
  text-align: justify;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #1792D2;
`

function Logo(props) {
  return (
    <Container>
      <Title>{typeof props.title != 'undefined' ? props.title : "Living the simple life"}</Title>
      <SubTitle>{typeof props.subtitle != 'undefined' ? props.subtitle : "A blog exploring minimalism in life"}</SubTitle>
    </Container>
  )
}

export default Logo
