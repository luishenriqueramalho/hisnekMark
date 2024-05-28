import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductSelect from "../screens/ProductSelect";
import Cart from "../screens/Cart";
import Login from "../screens/Login";

export type RootStackParamList = {
  Home: undefined;
  ProductSelect: undefined;
  Cart: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductSelect" component={ProductSelect} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigation;
