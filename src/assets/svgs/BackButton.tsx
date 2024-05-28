import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const BackButton = () => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Rect width="40" height="40" rx="20" fill="#FF6A00" fill-opacity="0.2" />
    <Path
      d="M21.707 14L16 19.707L21.707 25.414L23.121 24L18.828 19.707L23.121 15.414L21.707 14Z"
      fill="#FFFFFF"
    />
  </Svg>
);
