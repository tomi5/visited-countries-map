import React from "react";
import styles from "./ColorPicker.module.scss";

type Props = {
  handleColorPicker: (e: { target: any }) => void;
  pickedColor: string;
};

const ColorPicker: React.FC<Props> = ({ pickedColor, handleColorPicker }) => {
  const colorArray = [
    "#B93423",
    "#DB402B",
    "#FBCC33",
    "#428C08",
    "#1173DE",
    "#5948EB",
  ];

  return (
    <div className={styles.wrapper}>
      {colorArray.map((HEX, index) => (
        <label
          className={`${styles.colorBox} ${HEX === pickedColor && styles.checked}`}          
          style={{ background: `${HEX}` }}
          key={index}         
        >
          <input
            data-color={HEX}
            checked={HEX === pickedColor}
            onClick={handleColorPicker}
            type='radio'
          />
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
