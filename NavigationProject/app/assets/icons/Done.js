import React from "react";
import Svg, { Path } from "react-native-svg";
import { config } from "../../config/config";

const Done = ({width, height}) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill={config.COLOR_WHITE}/>
  </Svg>
);

export default Done;
