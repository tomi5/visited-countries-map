import React, { useState, useEffect } from "react";
import { ReactComponent as Map } from "../../assets/world.svg";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./MapContainer.module.scss";

const MapContainer = () => {
  const [country, setCountry] = useState<string[]>([]);
  const [countryOnHover, setCountryOnHover] = useState("");
  const [pickedColor, setPickedColor] = useState("#428C08");
  const [tooltipPosition, setTooltipPosition] = useState({ x: null, y: null });

  useEffect(() => {}, [countryOnHover, country, pickedColor]);

  const handleMouseMove = (e: any) => {
    const name = e.target.dataset.name;
    name ? setCountryOnHover(name) : setCountryOnHover("");
    setTooltipPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  const handleClickOnMap = (e: { target: any }) => {
    const id: string = e.target.dataset.id;
    id && (e.target.style.fill = pickedColor);
    id && setCountry([...country, id]);
  };

  const handleColorPicker = (e: { target: any }) => {
    setPickedColor(e.target.dataset.color);
  };

  return (
    <div>
      <Map onMouseMove={handleMouseMove} onClick={handleClickOnMap} />
      <ColorPicker
        pickedColor={pickedColor}
        handleColorPicker={handleColorPicker}
      />
      <div
        style={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
        }}
        className={styles.tooltip}
      >
        {countryOnHover}
      </div>
    </div>
  );
};

export default MapContainer;
