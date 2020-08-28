import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ReactComponent as Map } from '../../assets/world.svg';
import { StyledReactTooltip } from './style';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';
import ColorPicker from '../ColorPicker/ColorPicker';
import { fillWithColor } from '../../utils/utils';

const MapContainer = () => {
  const [pickedColor, setPickedColor] = useState('#428C08');
  const [countryOnHover, setCountryOnHover] = useState<string | null>(null);

  const {
    handleAddToVisited,
    selectedCountryCode,
    resetSelectedAndLastAdded,
    handleWantToRemoveFromVisited,
  } = useContext(VisitedCountryContext);

  useEffect(() => {
    if (!selectedCountryCode) return;
    fillWithColor(selectedCountryCode, pickedColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  const handleColorPicker: IEvent<any> = e => {
    setPickedColor(e.target.dataset.color);
    resetSelectedAndLastAdded();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHandleColorPicker = useCallback(e => handleColorPicker(e), [
    setPickedColor,
  ]);

  const handleToolTip: IEvent<any> = e => {
    const name = e.target.dataset.name;
    typeof name === 'string' ? setCountryOnHover(name) : setCountryOnHover(null);
  };

  return (
    <>
      <Map
        data-tip
        data-for='countryTooltip'
        onClick={handleAddToVisited}
        onMouseMove={handleToolTip}
        onDoubleClick={handleWantToRemoveFromVisited}
      />
      <StyledReactTooltip
        id='countryTooltip'
        type='warning'
        effect='float'
        getContent={() => countryOnHover}
      />
      <ColorPicker pickedColor={pickedColor} onClick={memoizedHandleColorPicker} />
    </>
  );
};

export default MapContainer;
