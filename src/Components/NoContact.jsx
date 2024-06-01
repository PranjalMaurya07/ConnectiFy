import React from 'react'
import styled from 'styled-components';

const NoContact = () => {
  return (
    <Container>
      <img src="images/Hands Contact.png" alt="" />
      <h3>Contact Not Found</h3>
    </Container>
  )
}

export default NoContact;

const Container = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h3{
        color: white;
        font-size: 24px;
        font-weight: 500;
    }
`
