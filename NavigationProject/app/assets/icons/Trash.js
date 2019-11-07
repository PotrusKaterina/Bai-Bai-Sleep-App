import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const Trash = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill={config.COLOR_WHITE} />
  </Svg>
);

export default Trash;
