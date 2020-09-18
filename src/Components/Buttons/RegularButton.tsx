import React from "react";
import { Button } from "./style";

type RegularButton = {
  type: ActionConfirm;
  handleClick: (shouldDelete: ActionConfirm) => void;
  children: React.ReactNode;
};

const RegularButton = ({ type, handleClick, children }: RegularButton) => (
  <Button name="regular" action={type} onClick={() => handleClick(type)}>
    {children}
  </Button>
);

export default RegularButton;
