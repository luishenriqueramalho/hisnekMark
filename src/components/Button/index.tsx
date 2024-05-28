import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${Colors.primary};
  border-top-right-radius: ${scale(20)}px;
  border-top-left-radius: ${scale(20)}px;
`;

const TitleButton = styled.Text`
  font-size: ${scale(32)}px;
  font-weight: bold;
  color: ${Colors.white};
  margin-left: ${scale(24)}px;
  margin-top: ${scale(16)}px;
`;

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <>
      <Container onPress={onPress}>
        <TitleButton>{title}</TitleButton>
        <SafeAreaView />
      </Container>
    </>
  );
};

export default Button;
