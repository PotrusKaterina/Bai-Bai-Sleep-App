import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";


const Stop = ({ width, height }) => (
  <Svg width={width || 45} height={height || 45} viewBox="0 0 24 24">
    <Path d="M6 6h12v12H6z" fill={config.COLOR_WHITE} />
  </Svg>
);

export default Stop;
