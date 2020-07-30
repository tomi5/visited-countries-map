import React, { useState, useEffect } from "react";
import { ReactComponent as Map } from "../../assets/world.svg";
import ReactTooltip from "react-tooltip";
import ColorPicker from "../ColorPicker/ColorPicker";
import styled from "styled-components";

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: white !important;
  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-top-color: white !important;
  }
`;

const MapContainer = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log("country:", country);
  const [countryOnHover, setCountryOnHover] = useState(null);
  const [pickedColor, setPickedColor] = useState("#428C08");

  const handleMouseMove = (e: any) => {
    const name = e.target.dataset.name;
    name ? setCountryOnHover(name) : setCountryOnHover(null);
  };

  const handleClickOnMap = (e: { target: any }) => {
    const id: string = e.target.dataset.id;
    id && (e.target.style.fill = pickedColor);
    id && setCountry([...country, id]);
  };

  const handleColorPicker = (e: { target: any }) => {
    setPickedColor(e.target.dataset.color);
  };

  useEffect(() => {}, [countryOnHover, country, pickedColor]);

  return (
    <div>
      <Map
        onMouseMove={handleMouseMove}
        onClick={handleClickOnMap}
        data-tip
        data-for='countryTooltip'
      />
      <ColorPicker
        pickedColor={pickedColor}
        handleColorPicker={handleColorPicker}
      />
      <StyledReactTooltip
        id='countryTooltip'
        type='warning'
        effect='float'
        getContent={() => countryOnHover}
      />
    </div>
  );
};

export default MapContainer;
