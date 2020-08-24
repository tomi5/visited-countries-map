import React, { useState } from 'react';
import Button from '../Buttons/Buttons';
import { HeaderComponent } from './style';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const [isModalOpen, setModalStatus] = useState(false);
  const [isLogged, setLoginStatus] = useState(false);

  return (
    <HeaderComponent>
      <Button
        name='instruction'
        openStatus={isModalOpen}
        onClickStatus={setModalStatus}
      >
        ?
      </Button>
      <h1>{title}</h1>
      <Button name='login' openStatus={isLogged} onClickStatus={setLoginStatus}>
        {!isLogged ? 'Log in' : 'Log out'}
      </Button>
    </HeaderComponent>
  );
};

export default Header;
