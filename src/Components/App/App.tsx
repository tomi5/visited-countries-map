import React from 'react';
import Header from '../Header/Header';
import SummaryBox from '../SummaryBox/SummaryBox';
import MapContainer from '../MapContainer/MapContainer';
import { Wrapper } from './style';
import VisitedCountryContextProvider from '../../contexts/visitedCountryContext';
import SearchContainer from '../SearchContainer/SearchContainer';
import Tabels from '../Tabels/Tabels';
import ModalConfirmRemove from '../Modals/ModalRemoveCountry';

const App = () => (
  <Wrapper>
    <Header title='Interactive Visited Countries Map' />
    <VisitedCountryContextProvider>
      <MapContainer />
      <SearchContainer />
      <SummaryBox />
      <Tabels />
      <ModalConfirmRemove />
    </VisitedCountryContextProvider>
  </Wrapper>
);

export default App;
