import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05 solid black;
  font-family: "Carter One", cursive;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s easy-in-out;
  &:focus {
    outline: none;
  }
`;

export default ButtonContainer;
