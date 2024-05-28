import React from "react";
import { ActivityIndicator, Image, Text } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "graphql/queries";

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProductList: React.FC = () => {
  const navigation = useNavigation<ProductListNavigationProp>();
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

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
          {data.products.map((product: any) => (
            <Card
              key={product.id}
              onPress={() => navigation.navigate("ProductSelect", { product })}
            >
              <Image
                source={{ uri: product.photo }}
                style={{ width: 146, height: 146 }}
              />
              <Descont>
                <Prices>
                  <PriceAtual>R$ {product.price.toFixed(2)}</PriceAtual>
                  {product.descont && (
                    <PriceDescont>R$ {product.priceDescont}</PriceDescont>
                  )}
                </Prices>
                {product.descont && (
                  <Percentual>
                    <ValuePercentua>10%</ValuePercentua>
                  </Percentual>
                )}
              </Descont>
              <NameProduct>{product.title}</NameProduct>
              <NameProduct>{product.libras}</NameProduct>
            </Card>
          ))}
        </Products>
      </Scroll>
    </>
  );
};

export default ProductList;
