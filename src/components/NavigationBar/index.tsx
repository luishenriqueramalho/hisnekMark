import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import Logo from "@/assets/img/hisnekLogo.png";
import { Header, Line, LoginOpen } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<ProductListNavigationProp>();

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
