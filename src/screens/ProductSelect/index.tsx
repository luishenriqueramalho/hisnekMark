import NavigationBar from "@/components/NavigationBar";
import { Scroll, Wrapper } from "@/utils/global";
import React from "react";
import { Image, SafeAreaView } from "react-native";
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
import { BackButton } from "@/assets/svgs";
import { useNavigation } from "@react-navigation/native";

interface ProductSelectProps {
  route: {
    params: {
      product: {
        title?: string;
        libras?: string;
        description?: string;
        price?: number;
        descont?: boolean;
        priceDescont?: number;
        photo?: string;
      };
    };
  };
}

const ProductSelect: React.FC<ProductSelectProps> = ({ route }) => {
  const navigation = useNavigation();
  const product = route.params.product;

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Back onPress={() => navigation.goBack()}>
          <BackButton />
        </Back>
        <Scroll>
          <Header>
            <Image
              source={{ uri: product.photo }}
              style={{ width: 259, height: 259 }}
            />
          </Header>
          <CategoryView>
            <CategoryName>Despensa</CategoryName>
          </CategoryView>
          <NameProduct>{product.title}</NameProduct>
          <PriceProduct>R$ {product.price}</PriceProduct>
          <DescriptionProduct>{product.description}</DescriptionProduct>
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
