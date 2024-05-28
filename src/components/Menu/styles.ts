import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

interface MenuProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  background-color: ${Colors.white};
  flex-direction: row;
  justify-content: space-between;
`;

export const Home = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const Cart = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const Title = styled.Text<MenuProps>`
  font-size: ${scale(13)}px;
  color: ${(props) =>
    props.isSelected ? Colors.primary : Colors.priceDescont};
  margin-top: ${scale(5)}px;
`;
