import { NotCart, Trash } from "@/assets/svgs";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  ButtonContinue,
  Car,
  ContainerCard,
  ContentCard,
  Continue,
  FlexTotal,
  Frete,
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
  TitleButton,
  TitleFrete,
  TitleNot,
  TitleTotal,
  Total,
  ValuePlus,
} from "./styles";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/store";

const Cart: React.FC = observer(() => {
  const { cartStore } = useStore();

  const incrementQuantity = (id: string) => {
    const item = cartStore.cartItems.find((item) => item.id === id);
    if (item) {
      cartStore.addItem({ ...item, quantity: item.quantity + 1 });
    }
  };

  const decrementQuantity = (id: string) => {
    const item = cartStore.cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      cartStore.cartItems = cartStore.cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    } else if (item) {
      cartStore.removeItem(id);
    }
  };

  const handleRemoveItem = (id: string) => {
    cartStore.removeItem(id);
  };

  if (cartStore.cartItems.length === 0) {
    return <NotProduct />;
  }

  return (
    <>
      <FlexTotal>
        <Car>Carrinho</Car>
        {cartStore.cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <ContainerCard>
              <IconCard>
                <Image
                  source={{ uri: item?.photo }}
                  style={{ width: 86, height: 86 }}
                />
              </IconCard>
              <ContentCard>
                <NameAndTrash>
                  <Title>{item.title}</Title>
                  <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                    <Trash />
                  </TouchableOpacity>
                </NameAndTrash>
                <PriceProduct>
                  <Price>R$ {item.price.toFixed(2)}</Price>
                </PriceProduct>
                <PriceAndPlusProduct>
                  <Plus>
                    <TouchableOpacity
                      onPress={() => decrementQuantity(item.id)}
                    >
                      <PlusAdd>-</PlusAdd>
                    </TouchableOpacity>
                    <ValuePlus>{item.quantity}</ValuePlus>
                    <TouchableOpacity
                      onPress={() => incrementQuantity(item.id)}
                    >
                      <PlusAdd>+</PlusAdd>
                    </TouchableOpacity>
                  </Plus>
                </PriceAndPlusProduct>
              </ContentCard>
            </ContainerCard>
            <Line />
          </React.Fragment>
        ))}
      </FlexTotal>
      <Continue>
        <Frete>
          <TitleFrete>frete</TitleFrete>
          <Text>Gratis</Text>
        </Frete>
        <Total>
          <TitleTotal>Total</TitleTotal>
          <TitleTotal>R$ {cartStore.totalPrice.toFixed(2)}</TitleTotal>
        </Total>
        <ButtonContinue>
          <TitleButton>Continuar</TitleButton>
        </ButtonContinue>
      </Continue>
    </>
  );
});

function NotProduct() {
  return (
    <Not>
      <NotCart />
      <TitleNot>Carrinho vazio</TitleNot>
      <SubTitleNot>Selecione novos itens para exibição</SubTitleNot>
    </Not>
  );
}

export default Cart;
