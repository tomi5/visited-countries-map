import React, { useState, useContext, useEffect, useCallback } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import ColorPicker from "../ColorPicker/ColorPicker";
import { fillWithColor, addColorProperties } from "../../utils/utils";
import DeleteContainer from "../Delete/DeleteContainer";
import { Wrapper, StyledReactTooltip, StyledMap } from "./style";
import { colors } from "../../theme/theme";

const initialPickedColor = colors.green;

const MapContainer = () => {
  const {
    addToVisited,
    selectedCountryCode,
    resetHelpingStates,
    visitedCountries,
    shouldDeleteFromVisited
  } = useContext(VisitedCountryContext);
  const [pickedColor, setPickedColor] = useState(initialPickedColor);
  const [countryOnHover, setCountryOnHover] = useState<string | null>(null);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  useEffect(() => {
    if (!selectedCountryCode) return;
    fillWithColor(selectedCountryCode, pickedColor);
    addColorProperties(visitedCountries, selectedCountryCode, pickedColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  useEffect(() => {
    setIsDoubleClicked(false);
  }, [visitedCountries]);

  const handleColorPicker: IEvent<any> = (e) => {
    // FIXME - fix "any" type
    setPickedColor(e.target.dataset.color);
    resetHelpingStates();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHandleColorPicker = useCallback((e) => handleColorPicker(e), [
    setPickedColor,
  ]);

  const handleToolTip: IEvent<any> = (e) => {
    // FIXME - fix "any" type
    const name = e.target.dataset.name;
    typeof name === "string"
      ? setCountryOnHover(name)
      : setCountryOnHover(null);
  };

  const handleDoubleCLick = (e: any) => {
    // FIXME - fix "any" type  
    if (!e.target.matches('path')) return
    setIsDoubleClicked(state => !state);
    shouldDeleteFromVisited(e, "delete");
  };

  return (
    <Wrapper>
      <ColorPicker
        pickedColor={pickedColor}
        handleClick={memoizedHandleColorPicker}
      />
      <StyledMap
        data-tip
        data-for="countryTooltip"
        onClick={addToVisited}
        onMouseMove={handleToolTip}
        onDoubleClick={handleDoubleCLick}
      />
      {isDoubleClicked && <DeleteContainer removeUsingMap action="delete" />}
      <StyledReactTooltip
        id="countryTooltip"
        type="warning"
        effect="float"
        getContent={() => countryOnHover}
      />
    </Wrapper>
  );
};

export default MapContainer;
