import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";


const Plus = ({ width, height }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={config.COLOR_WHITE} />
  </Svg>
);

export default Plus;
