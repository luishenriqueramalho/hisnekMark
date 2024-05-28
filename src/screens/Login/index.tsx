import { Logo } from "@/assets/svgs";
import React from "react";
import { SafeAreaView } from "react-native";
import { Content, Guest, Header, Input, TitleInput } from "./styles";
import { Wrapper } from "@/utils/global";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login: React.FC = () => {
  const navigation = useNavigation<ProductListNavigationProp>();

  return (
    <>
      <SafeAreaView />
      <Header>
        <Logo />
      </Header>
      <Wrapper>
        <Content>
          <TitleInput>Usuário</TitleInput>
          <Input />
        </Content>
        <Content>
          <TitleInput>Senha</TitleInput>
          <Input />
        </Content>
        <Guest onPress={() => navigation.navigate("Home")}>Sou convidado</Guest>
      </Wrapper>
      <Button title="Entrar" />
    </>
  );
};

export default Login;
