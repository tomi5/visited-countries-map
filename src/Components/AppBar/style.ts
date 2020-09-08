import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px -8px;
  transition: opacity 0.3s ease 0s, visibility 0.3s ease 0s;
  z-index: 20;
`;
