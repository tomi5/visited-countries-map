import React, { useState } from "react";
import Button from "./Buttons/Buttons";
import styles from "./Header.module.scss";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const [isInstructionOpen, setModalStatus] = useState(false);
  const [isLogged, setLoginStatus] = useState(false);

  return (
    <header className={styles.header}>
      <Button
        name='instruction'
        openStatus={isInstructionOpen}
        onClickStatus={setModalStatus}
      >
        ?
      </Button>
      <h1 className={styles.h1}>{title}</h1>
      <Button name='login' openStatus={isLogged} onClickStatus={setLoginStatus}>
        {!isLogged ? "Log in" : "Log out"}
      </Button>
    </header>
  );
};

export default Header;
