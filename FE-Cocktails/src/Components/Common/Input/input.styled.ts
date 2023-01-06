import styled from "styled-components";

export const Input = styled.input<{styleInputProp: string}>`
  margin-bottom: 20px;
  line-height: 15px;
  width: 100%;
  padding: 10px 0 10px 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  @media (max-width: 1024px) {
    margin-bottom: 17px;
  }
`;