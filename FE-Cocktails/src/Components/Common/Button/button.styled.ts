import styled from "styled-components";

export const Button = styled.button<{styleBtnProp: string}>`
  width: 47%;
  line-height: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
  background-color: rgb(201, 199, 199);
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
`;