import { NotCart } from "@/assets/svgs";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";
import { Not, SubTitleNot, TitleNot } from "./styles";

const Cart: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Not>
          <NotCart />
          <TitleNot>Carrinho vazio</TitleNot>
          <SubTitleNot>Selecione novos itens para exibição</SubTitleNot>
        </Not>
      </Wrapper>
    </>
  );
};

export default Cart;
