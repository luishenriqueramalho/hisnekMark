import { Colors } from "@/utils/colors";
import { hexToRgba, scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Back = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: ${scale(10)}px;
  margin-bottom: ${scale(10)}px;
`;

export const CategoryView = styled.View`
  background-color: ${hexToRgba(Colors.primary, 0.2)};
  padding: ${scale(10)}px;
  align-self: flex-end;
  border-radius: ${scale(5)}px;
  margin-top: ${scale(10)}px;
`;

export const CategoryName = styled.Text`
  font-size: ${scale(11)}px;
  font-weight: bold;
  color: ${Colors.primary};
`;

export const NameProduct = styled.Text`
  font-size: ${scale(24)}px;
  color: ${Colors.text};
  margin-top: ${scale(30)}px;
`;

export const PriceProduct = styled.Text`
  font-size: ${scale(36)}px;
  font-weight: 700;
  color: ${Colors.text};
  margin-top: ${scale(30)}px;
`;

export const DescriptionProduct = styled.Text`
  font-size: ${scale(13)}px;
  color: ${Colors.text};
  margin-top: ${scale(20)}px;
  text-align: justify;
`;

export const AddCart = styled.View`
  flex-direction: row;
  margin-horizontal: ${scale(24)}px;
  justify-content: space-between;
`;

export const Plus = styled.View`
  width: 40%;
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

export const Add = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50%;
  background-color: ${Colors.primary};
  padding: ${scale(10)}px;
  border-radius: ${scale(20)}px;
  align-items: center;
`;

export const TitleButtonAdd = styled.Text`
  font-size: ${scale(15)}px;
  color: ${Colors.white};
`;
