import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const Sort = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill={config.COLOR_WHITE} />
  </Svg>
);

export default Sort;
