import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: white;
  border-bottom: 2px solid #d0d0d0;
  display: flex;
  flex-direction: row;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 1;
  overflow-x: hidden;

  img {
    height: 60px;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    padding: 0px 10px 0px 10px;
    margin: 0px;
    list-style-type: none;
    display: inline-block;
  }
`;

export default StyledNavBar;
