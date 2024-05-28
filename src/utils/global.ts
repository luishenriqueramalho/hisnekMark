import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  margin-horizontal: ${scale(24)}px;
`;

export const HomeWrapper = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export function scale(size: number, minSize?: number): number {
  const newSize = Math.min(
    size,
    Math.max(size * (Dimensions.get("window").width / 375), minSize || 0)
  );
  return Math.floor(newSize);
}

export const hexToRgba = (hex: string, opacity: number) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
