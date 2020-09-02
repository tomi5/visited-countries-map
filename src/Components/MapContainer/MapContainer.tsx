import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ReactComponent as Map } from '../../assets/world.svg';
import { StyledReactTooltip } from './style';
import { VisitedCountryContext } from '../../contexts/VisitedCountryContext';
import ColorPicker from '../ColorPicker/ColorPicker';
import { fillWithColor, addColorProperties } from '../../utils/utils';
import RemoveContainer from '../Delete/DeleteContainer';

const MapContainer = () => {
  const {
    addToVisited,
    selectedCountryCode,
    resetHelpingStates,
    visitedCountries,
    shouldDeleteFromVisited
  } = useContext(VisitedCountryContext);
  const [pickedColor, setPickedColor] = useState('#428C08');
  const [countryOnHover, setCountryOnHover] = useState<string | null>(null);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  useEffect(() => {
    if (!selectedCountryCode) return;
    fillWithColor(selectedCountryCode, pickedColor);
    addColorProperties(visitedCountries, selectedCountryCode, pickedColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  const handleColorPicker: IEvent<any> = e => {
    // FIXME - fix "any" type
    setPickedColor(e.target.dataset.color);
    resetHelpingStates();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHandleColorPicker = useCallback(e => handleColorPicker(e), [
    setPickedColor
  ]);

  const handleToolTip: IEvent<any> = e => {
    // FIXME - fix "any" type
    const name = e.target.dataset.name;
    typeof name === 'string' ? setCountryOnHover(name) : setCountryOnHover(null);
  };

  const handleDoubleCLick = (e: any) => {
    // FIXME - fix "any" type
    setIsDoubleClicked(state => !state);
    shouldDeleteFromVisited(e);
  };

  return (
    <>
      {visitedCountries.length ? <RemoveContainer action={'reset'} /> : null}
      <Map
        data-tip
        data-for='countryTooltip'
        onClick={addToVisited}
        onMouseMove={handleToolTip}
        onDoubleClick={handleDoubleCLick}
      />
      {isDoubleClicked && <RemoveContainer removeUsingMap action={'delete'} />}

      <StyledReactTooltip
        id='countryTooltip'
        type='warning'
        effect='float'
        getContent={() => countryOnHover}
      />
      <ColorPicker
        pickedColor={pickedColor}
        handleClick={memoizedHandleColorPicker}
      />
    </>
  );
};

export default MapContainer;
