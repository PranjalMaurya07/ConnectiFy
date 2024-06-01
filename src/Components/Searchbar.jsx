import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const Searchbar = ({Onopen,filterContacts}) => {
  return (
    <Container>
      <FiSearch className="search_icon"/>
      <input type="text" name="" id="" placeholder="Search Contact" onChange={filterContacts}/> 
      <AiFillPlusCircle className="add_icon" onClick={Onopen}/>
    </Container>
  );
};

export default Searchbar;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px;

  .search_icon{
    color: white;
    position: absolute;
    margin-left: 5px;
    width: 24px;;
    height: 24px;
  }

  input {
    flex-grow: inherit;
    border: 2px solid white;
    background: transparent;
    border-radius: 10px;
    width: 315px;
    height: 40px;
    padding-left: 34px;
    color: white;
  }

  .add_icon{
    width: 52px;
    height: 52px;
    color: white;
    cursor: pointer;
  }
  
`;
