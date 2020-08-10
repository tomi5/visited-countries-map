import styled from "styled-components";

interface Props {
  color: string;
  checked: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 3px solid #707070;
  background-color: #707070;
  border-radius: 5px;
  width: 120px;
  height: 20px;
`;

export const Label = styled.label`
  flex: 1;
  cursor: pointer;
  background: ${(props: Props) => props.color};
  box-shadow: ${(props: Props) => props.checked && "inset 0 0 0 3px #ffff"};
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  & input {
    visibility: hidden;
  }
`;
