import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  margin-top: ${scale(13)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: ${scale(24)}px;
  align-items: center;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-vertical: ${scale(10)}px;
  background-color: ${Colors.line};
`;

export const LoginOpen = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
