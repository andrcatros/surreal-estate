import styled from "styled-components";

const StyledSideBar = styled.div`
  position: relative;
  margin-top: 60px;
  padding-right: 100px;
  height: 100%;
  background-color: white;
  top: 1;
  left: 0;
  overflow-x: hidden;
  border-right: 2px solid #d0d0d0;
  border-top: 2px solid #d0d0d0;

  h4 {
    padding-left: 15px;
    margin-bottom: 5px;
    font-size: 20px;
    margin-block-start: 0.5em;
  }

  ul {
    margin-block-start: 0px;
  }

  a {
    padding-left: 15px;
    color: black;
    text-decoration: none;
    line-height: 2.5;
    font-size: 18px;
    font-weight: bold;
  }

  form {
    margin-top: 5px;
    display: flex;
  }

  input {
    margin-left: 4px;
    border: 2px solid #d0d0d0;
    font-size: 18px;
    width: 80%;
  }
  button {
    background-color: #774872;
    color: white;
    padding: 7px 7px 5px 5px;
    border-style: none;
  }
`;

export default StyledSideBar;
