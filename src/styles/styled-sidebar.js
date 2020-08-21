import styled from "styled-components";

const StyledSideBar = styled.div`
  position: fixed;
  margin-top: 60px;
  width: 220px;
  height: 100%;
  background-color: white;
  z-index: 1;
  top: 1;
  overflow-x: hidden;
  border-right: 2px solid #d0d0d0;
  border-top: 2px solid #d0d0d0;

  h4 {
    padding-left: 15px;
    margin-bottom: 5px;
    font-size: 20px;
  }

  a {
    padding-left: 15px;
    color: black;
    text-decoration: none;
    line-height: 2.5;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default StyledSideBar;
