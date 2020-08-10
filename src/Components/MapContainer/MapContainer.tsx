import React, { useState } from "react";
import { ReactComponent as Map } from "../../assets/world.svg";
import { StyledReactTooltip } from "./style";

type MapContainerProps = {
  onClick: IEvent<any>;
};

const MapContainer = ({ onClick }: MapContainerProps) => {
  const [countryOnHover, setCountryOnHover] = useState<string | null>(null);

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
        onClick={onClick}
        onMouseMove={handleToolTip}
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
