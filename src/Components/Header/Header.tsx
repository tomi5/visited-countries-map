import React, { useState, useContext } from 'react';
import { HeaderComponent } from './style';
import ButtonInfo from '../Buttons/ButtonInfo';
import { ThemeContext } from '../../contexts/themeContext';

type HeaderProps = {
   title: string;
};

const Header = ({ title }: HeaderProps) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const { toggleTheme } = useContext(ThemeContext);

   const handleToggleModal = () => {
      setIsModalOpen((isModalOpen) => !isModalOpen);
   };

   return (
      <HeaderComponent>
         <ButtonInfo
            name={'info'}
            openStatus={isModalOpen}
            handleToggleModal={handleToggleModal}
         >
            ?
         </ButtonInfo>
         <h1>{title}</h1>

         <button onClick={toggleTheme}>Mode</button>
      </HeaderComponent>
   );
};

export default Header;
