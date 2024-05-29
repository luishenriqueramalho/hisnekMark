import { Logo } from "@/assets/svgs";
import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import { Content, Guest, Header, Input, TitleInput } from "./styles";
import { Wrapper } from "@/utils/global";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Auth } from "aws-amplify";

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login: React.FC = () => {
  const navigation = useNavigation<ProductListNavigationProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error signing in", error);
      Alert.alert("Erro ao fazer login", error.message);
    }
  };

  return (
    <>
      <SafeAreaView />
      <Header>
        <Logo />
      </Header>
      <Wrapper>
        <Content>
          <TitleInput>Usuário</TitleInput>
          <Input value={username} onChangeText={setUsername} />
        </Content>
        <Content>
          <TitleInput>Senha</TitleInput>
          <Input value={password} onChangeText={setPassword} secureTextEntry />
        </Content>
        <Guest onPress={() => navigation.navigate("Home")}>Sou convidado</Guest>
      </Wrapper>
      <Button title="Entrar" onPress={handleLogin} />
    </>
  );
};

export default Login;
