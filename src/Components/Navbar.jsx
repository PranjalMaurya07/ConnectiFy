import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <img src="images/logos_firebase.png" alt="" />
      <h1>Connectify</h1>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 60px;
    background-color: white;
    margin : 10px;
    border-radius: 10px;

    h1{
        font-size: 20px;
        font-weight: 600;
    }
`
