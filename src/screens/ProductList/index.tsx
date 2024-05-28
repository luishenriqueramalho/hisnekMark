import React from "react";
import { Image } from "react-native";
import {
  Card,
  Categorys,
  Descont,
  IconInfo,
  NameProduct,
  Percentual,
  PriceAtual,
  PriceDescont,
  Prices,
  Products,
  TitleIcon,
  ValuePercentua,
} from "./styles";
import { Scroll } from "@/utils/global";
import Oferta from "@/assets/img/oferta.png";
import Despensa from "@/assets/img/despensa.png";
import Limpeza from "@/assets/img/limpeza.png";
import Carnes from "@/assets/img/carnes.png";
import Arroz from "@/assets/img/arroz.png";
import AguaSanitaria from "@/assets/img/aguasanitaria.png";
import { useNavigation } from "@react-navigation/native";

const ProductList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Categorys>
        <IconInfo>
          <Image source={Oferta} />
          <TitleIcon>Oferta</TitleIcon>
        </IconInfo>
        <IconInfo>
          <Image source={Despensa} />
          <TitleIcon>Despensa</TitleIcon>
        </IconInfo>
        <IconInfo>
          <Image source={Limpeza} />
          <TitleIcon>Limpeza</TitleIcon>
        </IconInfo>
        <IconInfo>
          <Image source={Carnes} />
          <TitleIcon>Carnes</TitleIcon>
        </IconInfo>
      </Categorys>
      <Scroll>
        <Products>
          <Card onPress={() => navigation.navigate("ProductSelect")}>
            <Image source={Arroz} />
            <Descont>
              <PriceAtual>R$ 44,45</PriceAtual>
            </Descont>
            <NameProduct>Arroz Tio João Branco</NameProduct>
            <NameProduct>5kg</NameProduct>
          </Card>
          <Card onPress={() => navigation.navigate("ProductSelect")}>
            <Image source={AguaSanitaria} />
            <Descont>
              <Prices>
                <PriceAtual>R$ 44,45</PriceAtual>
                <PriceDescont>R$ 44,45</PriceDescont>
              </Prices>
              <Percentual>
                <ValuePercentua>10%</ValuePercentua>
              </Percentual>
            </Descont>
            <NameProduct>Arroz Tio João Branco</NameProduct>
            <NameProduct>5kg</NameProduct>
          </Card>
          <Card onPress={() => navigation.navigate("ProductSelect")}>
            <Image source={Arroz} />
            <Descont>
              <PriceAtual>R$ 44,45</PriceAtual>
            </Descont>
            <NameProduct>Arroz Tio João Branco</NameProduct>
            <NameProduct>5kg</NameProduct>
          </Card>
          <Card onPress={() => navigation.navigate("ProductSelect")}>
            <Image source={Arroz} />
            <Descont>
              <PriceAtual>R$ 44,45</PriceAtual>
            </Descont>
            <NameProduct>Arroz Tio João Branco</NameProduct>
            <NameProduct>5kg</NameProduct>
          </Card>
        </Products>
      </Scroll>
    </>
  );
};

export default ProductList;
