import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const KeyboardArrowUp = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill={config.COLOR_WHITE} />
  </Svg>
);

export default KeyboardArrowUp;
