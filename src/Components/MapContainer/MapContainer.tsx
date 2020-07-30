import React, { useState, useEffect } from "react";
import { ReactComponent as Map } from "../../assets/world.svg";
import ReactTooltip from "react-tooltip";
import ColorPicker from "../ColorPicker/ColorPicker";
import styled from "styled-components";

const MapContainer = () => {
  const [country, setCountry] = useState<string[]>([]);
  const [countryOnHover, setCountryOnHover] = useState("");
  const [pickedColor, setPickedColor] = useState("#428C08");

  const handleMouseMove = (e: any) => {
    const name = e.target.dataset.name;
    name ? setCountryOnHover(name) : setCountryOnHover("");
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
      {countryOnHover && (
        <ReactTooltip
          place='right'
          effect='float'
          id='countryTooltip'
          getContent={() => countryOnHover}
        />
      )}
    </div>
  );
};

export default MapContainer;
