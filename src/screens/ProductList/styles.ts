import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Categorys = styled.View`
  flex-direction: row;
  margin-top: ${scale(20)}px;
  justify-content: space-between;
`;

export const IconInfo = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
`;

export const TitleIcon = styled.Text`
  font-size: ${scale(12)}px;
  margin-top: ${scale(8)}px;
  color: ${Colors.text};
`;

export const Products = styled.View`
  margin-top: ${scale(20)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 48%;
  margin-bottom: ${scale(20)}px;
  background-color: ${Colors.white};
  padding: ${scale(10)}px;
  border-radius: ${scale(10)}px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;

export const Descont = styled.View`
  margin-top: ${scale(12)}px;
  margin-bottom: ${scale(20)}px;
`;

export const Prices = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceAtual = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: 700;
  color: ${Colors.text};
`;

export const PriceDescont = styled.Text`
  font-size: ${scale(10)}px;
  color: ${Colors.priceDescont};
  margin-left: ${scale(10)}px;
`;

export const Percentual = styled.View`
  width: 25%;
  background-color: ${Colors.primary};
  margin-top: ${scale(5)}px;
  align-items: center;
  border-radius: ${scale(10)}px;
`;

export const ValuePercentua = styled.Text`
  font-size: ${scale(11)}px;
  color: ${Colors.white};
`;

export const NameProduct = styled.Text`
  font-size: ${scale(13)}px;
  color: ${Colors.text};
  margin-top: ${scale(5)}px;
`;
