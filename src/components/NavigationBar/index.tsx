import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import Logo from "@/assets/img/hisnekLogo.png";
import { Header, Line, LoginOpen } from "./styles";
import { useNavigation } from "@react-navigation/native";

const NavigationBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView />
      <Header>
        <Image source={Logo} />
        <LoginOpen onPress={() => navigation.navigate("Login")}>
          <Text>Entrar</Text>
        </LoginOpen>
      </Header>
      <Line />
    </>
  );
};

export default NavigationBar;
