import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Not = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleNot = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: bold;
  color: black;
  margin-top: ${scale(18)}px;
`;

export const SubTitleNot = styled.Text`
  font-size: ${scale(15)}px;
  font-weight: bold;
  color: ${Colors.text};
  margin-top: ${scale(26)}px;
`;
