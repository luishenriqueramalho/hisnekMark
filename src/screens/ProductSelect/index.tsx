import NavigationBar from "@/components/NavigationBar";
import { Scroll, Wrapper } from "@/utils/global";
import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import Arroz from "@/assets/img/arroz.png";
import {
  Add,
  AddCart,
  Back,
  CategoryName,
  CategoryView,
  DescriptionProduct,
  Header,
  NameProduct,
  Plus,
  PlusAdd,
  PriceProduct,
  TitleButtonAdd,
  ValuePlus,
} from "./styles";
import Menu from "@/components/Menu";
import { BackButton } from "@/assets/svgs";
import { useNavigation } from "@react-navigation/native";

const ProductSelect: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Back onPress={() => navigation.goBack()}>
          <BackButton />
        </Back>
        <Scroll>
          <Header>
            <Image source={Arroz} />
          </Header>
          <CategoryView>
            <CategoryName>Despensa</CategoryName>
          </CategoryView>
          <NameProduct>Arroz Tio João Branco</NameProduct>
          <PriceProduct>R$ 44,95</PriceProduct>
          <DescriptionProduct>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </DescriptionProduct>
        </Scroll>
      </Wrapper>
      <AddCart>
        <Plus>
          <PlusAdd>-</PlusAdd>
          <ValuePlus>1</ValuePlus>
          <PlusAdd>+</PlusAdd>
        </Plus>
        <Add>
          <TitleButtonAdd>Adicionar ao carrinho</TitleButtonAdd>
        </Add>
      </AddCart>
      <SafeAreaView />
    </>
  );
};

export default ProductSelect;
