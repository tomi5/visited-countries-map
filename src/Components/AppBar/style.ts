import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.element};
  box-shadow: ${({ theme }) => theme.shadow} 0px 3px 10px -8px;
  transition: 0.3s background ease;
  z-index: 20;
  ${({ theme }) => theme.mq.xs} {
    height: 65px;
  }
`;

export const Header = styled.header`
  position: relative;
  flex: 1;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
