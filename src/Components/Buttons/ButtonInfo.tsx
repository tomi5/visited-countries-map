import React, { ReactNode } from 'react';
import { Wrapper, ButtonComponent } from './style';

type ButtonInfoProps = {
  name: string;
  openStatus: boolean;
  handleToggleModal: () => void;
  children: ReactNode;
};

const ButtonInfo = ({
  name,
  openStatus,
  handleToggleModal,
  children
}: ButtonInfoProps) => {
  return (
    <Wrapper>
      <ButtonComponent
        name={name}
        openStatus={openStatus}
        onClick={handleToggleModal}
        aria-expanded={openStatus}
      >
        {children}
      </ButtonComponent>
    </Wrapper>
  );
};

export default ButtonInfo;
