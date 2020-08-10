import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: white;
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: row;

  img {
    height: 40px;
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
