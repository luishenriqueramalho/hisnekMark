import { Colors } from "@/utils/colors";
import { hexToRgba, scale } from "@/utils/global";
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

export const Car = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: bold;
  color: ${Colors.text};
  margin-top: ${scale(20)}px;
  margin-bottom: ${scale(40)}px;
  text-align: center;
`;

export const FlexTotal = styled.View`
  flex: 1;
`;

export const ContainerCard = styled.View`
  flex-direction: row;
`;

export const IconCard = styled.View`
  width: 30%;
`;

export const ContentCard = styled.View`
  width: 70%;
  position: relative;
  padding-bottom: ${scale(20)}px;
`;

export const NameAndTrash = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${scale(15)}px;
  color: ${Colors.text};
`;

export const PriceAndPlusProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Price = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: bold;
  color: ${Colors.text};
  margin-top: ${scale(20)}px;
`;

export const PriceProduct = styled.View``;

export const Plus = styled.View`
  width: 50%;
  background-color: ${hexToRgba(Colors.primary, 0.2)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${scale(20)}px;
  padding-horizontal: ${scale(10)}px;
`;

export const PlusAdd = styled.Text`
  font-size: ${scale(36)}px;
  color: ${Colors.primary};
`;

export const ValuePlus = styled.Text`
  font-size: ${scale(24)}px;
  font-weight: bold;
  color: black;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-vertical: ${scale(20)}px;
  background-color: ${Colors.primary};
`;

export const Continue = styled.View`
  padding-vertical: ${scale(10)}px;
`;

export const Frete = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${scale(9)}px;
  margin-bottom: ${scale(9)}px;
`;

export const TitleFrete = styled.Text`
  font-size: ${scale(13)}px;
  color: ${Colors.text};
`;

export const TitleTotal = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: bold;
  color: ${Colors.text};
`;

export const ButtonContinue = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${Colors.primary};
  border-radius: ${scale(20)}px;
  padding-vertical: ${scale(10)}px;
  align-items: center;
`;

export const TitleButton = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: bold;
  color: ${Colors.white};
`;
