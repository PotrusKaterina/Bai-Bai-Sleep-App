import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const KeyboardArrowDown = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={config.COLOR_MIDDLE_VIOLET} />
  </Svg>
);

export default KeyboardArrowDown;
