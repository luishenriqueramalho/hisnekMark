import React from "react";
import Navigation from "./src/navigator";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
}
