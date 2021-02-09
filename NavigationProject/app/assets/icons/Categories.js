import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const Categories = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" fill={config.COLOR_LIGHT_VIOLET}></Path>
  </Svg>
);

export default Categories;
