import { NotCart } from "@/assets/svgs";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Image, Text, View } from "react-native";
import {
  Car,
  ContainerCard,
  ContentCard,
  Continue,
  FlexTotal,
  IconCard,
  Line,
  NameAndTrash,
  Not,
  Plus,
  PlusAdd,
  Price,
  PriceAndPlusProduct,
  PriceProduct,
  SubTitleNot,
  Title,
  TitleNot,
  ValuePlus,
} from "./styles";

const arroz =
  "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202311211801_y99718exz9.jpg";

function NotProduct() {
  return (
    <Not>
      <NotCart />
      <TitleNot>Carrinho vazio</TitleNot>
      <SubTitleNot>Selecione novos itens para exibição</SubTitleNot>
    </Not>
  );
}

const Cart: React.FC = () => {
  return (
    <>
      <FlexTotal>
        <Car>Carrinho</Car>
        <ContainerCard>
          <IconCard>
            <Image source={{ uri: arroz }} style={{ width: 86, height: 86 }} />
          </IconCard>
          <ContentCard>
            <NameAndTrash>
              <Title>Arroz Branco Tio João</Title>
            </NameAndTrash>
            <PriceProduct>
              <Price>R8.28</Price>
            </PriceProduct>
            <PriceAndPlusProduct>
              <Plus>
                <PlusAdd>-</PlusAdd>
                <ValuePlus>1</ValuePlus>
                <PlusAdd>+</PlusAdd>
              </Plus>
            </PriceAndPlusProduct>
          </ContentCard>
        </ContainerCard>
        <Line />
      </FlexTotal>
      <Continue>
        <View style={{ flexDirection: "row" }}>
          <Text>frete</Text>
          <Text>Gratis</Text>
        </View>
        <Text>Total</Text>
        <Text>R$ 999,99</Text>
        <Text>Continuar</Text>
      </Continue>
    </>
  );
};

export default Cart;
