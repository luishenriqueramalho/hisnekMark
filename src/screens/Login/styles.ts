import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  margin-top: ${scale(96)}px;
  align-items: center;
  margin-bottom: ${scale(100)}px;
`;

export const Content = styled.View`
  margin-bottom: ${scale(15)}px;
`;

export const Input = styled.TextInput`
  border-color: #cacaca;
  border-width: 1px;
  height: ${scale(50)}px;
  background-color: #ffffff;
  border-radius: ${scale(15)}px;
  padding: 0 ${scale(10)}px;
`;

export const TitleInput = styled.Text`
  font-size: ${scale(13)}px;
  color: ${Colors.primary};
  font-weight: 500;
  margin-horizontal: ${scale(10)}px;
  margin-vertical: ${scale(5)}px;
`;

export const Guest = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.textLink};
  text-align: right;
`;
