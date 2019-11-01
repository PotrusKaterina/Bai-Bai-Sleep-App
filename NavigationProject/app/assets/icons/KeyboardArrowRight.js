import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const KeyboardArrowRight = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill={config.COLOR_WHITE}></Path>
  </Svg>
);

export default KeyboardArrowRight;
