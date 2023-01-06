import styled from "styled-components";

export const Button = styled.button<{styleBtnProp: string}>`
  line-height: 16px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 800;
  padding: 10px 50px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
  background-color: transparent;
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
  color: rgb(255, 255, 255);
  &:hover {
    border: 1px solid rgba(153, 107, 96, .7);
    background-color: rgba(153, 107, 96, .7);
  }
  &:active {
    border: 1px solid rgba(153, 107, 96, 1);
    background-color: rgba(153, 107, 96, 1);
  }
    @media (max-width: 1024px) {
      font-size: 14px;
      font-weight: 700;
    }
`;