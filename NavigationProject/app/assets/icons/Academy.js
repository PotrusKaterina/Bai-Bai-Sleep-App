import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const Academy = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill={color}/>
  </Svg>
);

export default Academy;
