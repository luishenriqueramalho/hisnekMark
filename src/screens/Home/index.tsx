import NavigationBar from "@/components/NavigationBar";
import React, { useState } from "react";
import { Wrapper } from "@/utils/global";
import Menu from "@/components/Menu";
import ProductList from "../ProductList";
import Cart from "../Cart";

const Home: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<"home" | "cart">("home");

  return (
    <>
      <NavigationBar />
      <Wrapper>
        {selectedScreen === "home" ? <ProductList /> : <Cart />}
      </Wrapper>
      <Menu
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
      />
    </>
  );
};

export default Home;
