import { Logo } from "@/assets/svgs";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Content, Guest, Header, Input, TitleInput } from "./styles";
import { Wrapper } from "@/utils/global";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigaton = useNavigation();

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
        <Guest onPress={() => navigaton.navigate("Home")}>Sou convidado</Guest>
      </Wrapper>
      <Button title="Entrar" />
    </>
  );
};

export default Login;
