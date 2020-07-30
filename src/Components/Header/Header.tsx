import React, { useState } from "react";
import Button from "./Buttons/Buttons";
import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
`;

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const [isInstructionOpen, setModalStatus] = useState(false);
  const [isLogged, setLoginStatus] = useState(false);

  return (
    <HeaderComponent>
      <Button
        name='instruction'
        openStatus={isInstructionOpen}
        onClickStatus={setModalStatus}
      >
        ?
      </Button>
      <h1>{title}</h1>
      <Button name='login' openStatus={isLogged} onClickStatus={setLoginStatus}>
        {!isLogged ? "Log in" : "Log out"}
      </Button>
    </HeaderComponent>
  );
};

export default Header;
