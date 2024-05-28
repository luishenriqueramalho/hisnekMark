import React from "react";
import { SafeAreaView } from "react-native";
import { Cart, Container, Home, Title } from "./styles";
import { MenuCart, MenuHome } from "@/assets/svgs";

interface MenuProps {
  selectedScreen: "home" | "cart";
  setSelectedScreen: (screen: "home" | "cart") => void;
}

const Menu: React.FC<MenuProps> = ({ selectedScreen, setSelectedScreen }) => {
  return (
    <>
      <Container>
        <Home onPress={() => setSelectedScreen("home")}>
          <MenuHome isSelected={selectedScreen === "home"} />
          <Title isSelected={selectedScreen === "home"}>Home</Title>
        </Home>
        <Cart onPress={() => setSelectedScreen("cart")}>
          <MenuCart isSelected={selectedScreen === "cart"} />
          <Title isSelected={selectedScreen === "cart"}>Carrinho</Title>
        </Cart>
      </Container>
      <SafeAreaView />
    </>
  );
};

export default Menu;
