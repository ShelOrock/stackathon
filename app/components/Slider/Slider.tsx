import React from "react";
import { ComponentPropTypes } from "./types";
import StyledSlider from "./styles";

const Slider: React.FC<ComponentPropTypes> = ({
  min,
  max,
  value,
  onChange,
  ...spacingProps
}) => (
  <StyledSlider 
    type="range"
    min={ min }
    max={ max }
    value={ value }
    onChange={ onChange }
    { ...spacingProps }
  />
);

export default Slider;
