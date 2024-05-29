import { Logo } from "@/assets/svgs";
import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import { Content, Guest, Header, Input, TitleInput } from "./styles";
import { Wrapper } from "@/utils/global";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signIn, signUp } from "@aws-amplify/auth";

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login: React.FC = () => {
  const navigation = useNavigation<ProductListNavigationProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Login inválido", "Usuário ou senha inválidos!");
    }
  };

  /* const handleLogin = async () => {
    const response = signUp({
      username: "luiss",
      password: "Luis123@",
      options: {
        userAttributes: {
          email: "me@domain.com",
          phone_number: "+12128601234",
          given_name: "Jane",
          family_name: "Doe",
          nickname: "Jane",
        },
      },
    })
      .then(() => {
        console.log(">>>", response);
      })
      .catch((e) => console.log("Errorr", e));
  }; */

  /* const handleLogin = async () => {
    signIn({
      username,
      password,
      options: {
        authFlowType: "USER_PASSWORD_AUTH",
      },
    })
      .then(() => console.log("Funcionou"))
      .catch((e) => console.log("Errorr", e));
    navigation.navigate("Home");
  }; */

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
