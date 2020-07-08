import React, { MouseEvent, KeyboardEvent } from "react";
import styles from "./Buttons.module.scss";

type Props = {
  name: string;
  openStatus: boolean;
  onClickStatus: (openStatus: boolean) => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  name,
  openStatus,
  onClickStatus,
  children,
}) => {
  const handleButtonClick = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    onClickStatus(!openStatus);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${styles[name]} ${
          openStatus && styles.open
        }`}
        onClick={handleButtonClick}
        aria-expanded={openStatus}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
