import styled from "styled-components";

const StyledPropertyCard = styled.div`
  width: 100%;
  border-style: solid;
  border-width: thin;
  border-color: #c0c0c0;
  text-align: center;
  font-size: 18px;
  line-height: 1.75;
  width: 550px;
  margin: 10px;
  background-color: white;

  button {
    height: 40px;
    background-color: #774872;
    color: white;
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    border-style: none;
  }
  img {
    display: block;
    margin: auto;
    width: 500px;
    padding: 10px;
  }
`;

export default StyledPropertyCard;
