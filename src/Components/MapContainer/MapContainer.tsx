import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Map } from "../../assets/world.svg";
import { StyledReactTooltip } from "./style";

import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import ColorPicker from "../ColorPicker/ColorPicker";
import { fillWithColor } from "../../utils/fillWithColor";

type MapContainerProps = {
  allCountries: ICountry[];
};

const MapContainer = ({ allCountries }: MapContainerProps) => {
  const [pickedColor, setPickedColor] = useState("#428C08");
  const [countryOnHover, setCountryOnHover] = useState<string | null>(null);

  const {
    handleAddToVisited,
    selectedCountryCode,
    resetSelectedCountry,
  } = useContext(VisitedCountryContext);

  useEffect(() => {
    if (selectedCountryCode) {
      fillWithColor(selectedCountryCode, pickedColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  const handleColorPicker: IEvent<any> = (e) => {
    setPickedColor(e.target.dataset.color);
    resetSelectedCountry();
  };

  const handleToolTip: IEvent<any> = (e) => {
    const name = e.target.dataset.name;
    typeof name === "string"
      ? setCountryOnHover(name)
      : setCountryOnHover(null);
  };

  return (
    <div>
      <Map
        data-tip
        data-for='countryTooltip'
        onClick={(e) => handleAddToVisited(e, allCountries)}
        onMouseMove={handleToolTip}
      />
      <StyledReactTooltip
        id='countryTooltip'
        type='warning'
        effect='float'
        getContent={() => countryOnHover}
      />
      <ColorPicker pickedColor={pickedColor} onClick={handleColorPicker} />
    </div>
  );
};

export default MapContainer;
