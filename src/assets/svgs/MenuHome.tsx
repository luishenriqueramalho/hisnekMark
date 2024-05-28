import React from "react";
import Svg, { Path } from "react-native-svg";

interface MenuHomeProps {
  isSelected?: boolean;
}

export const MenuHome: React.FC<MenuHomeProps> = ({ isSelected }) => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Path
      d="M13.239 23.5309H21.7192"
      stroke={isSelected ? "#FF6900" : "#6B6D7B"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.50058 19.9981C3.50058 11.7862 4.396 12.3593 9.21579 7.88954C11.3245 6.19204 14.6058 2.91663 17.4393 2.91663C20.2714 2.91663 23.6183 6.176 25.746 7.88954C30.5658 12.3593 31.4597 11.7862 31.4597 19.9981C31.4597 32.0833 28.6029 32.0833 17.4802 32.0833C6.35746 32.0833 3.50058 32.0833 3.50058 19.9981Z"
      stroke={isSelected ? "#FF6900" : "#6B6D7B"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
