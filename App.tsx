import React from "react";
import Navigation from "./src/navigator";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";
import { StoreProvider } from "@/mobx/store";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react-native";

Amplify.configure(amplifyconfig);

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

const App = () => {
  return (
    <Authenticator.Provider>
      <StoreProvider>
        <ApolloProvider client={client}>
          <NavigationContainer theme={MyTheme}>
            <Navigation />
          </NavigationContainer>
        </ApolloProvider>
      </StoreProvider>
    </Authenticator.Provider>
  );
};

export default App;
