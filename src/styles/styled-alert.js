import styled from "styled-components";

const StyledAlert = styled.div`
  position: absolute;
  margin-left: -275px;
  left: 50%;
  background-color: white;
  width: 550px;
  height: 40px;
  font-size: 20px;
  border-style: solid;
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

export default StyledAlert;
