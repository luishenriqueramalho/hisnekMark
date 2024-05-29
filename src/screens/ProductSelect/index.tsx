import NavigationBar from "@/components/NavigationBar";
import { Scroll, Wrapper } from "@/utils/global";
import React, { useState } from "react";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
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
import { useStore } from "@/mobx/store";

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
  const { cartStore } = useStore();
  const product = route.params.product;
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    cartStore.addItem({ ...product, quantity });
    navigation.goBack();
  };

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
          <TouchableOpacity onPress={decrementQuantity}>
            <PlusAdd>-</PlusAdd>
          </TouchableOpacity>
          <ValuePlus>{quantity}</ValuePlus>
          <TouchableOpacity onPress={incrementQuantity}>
            <PlusAdd>+</PlusAdd>
          </TouchableOpacity>
        </Plus>
        <Add onPress={handleAddToCart}>
          <TitleButtonAdd>Adicionar ao carrinho</TitleButtonAdd>
        </Add>
      </AddCart>
      <SafeAreaView />
    </>
  );
};

export default ProductSelect;
