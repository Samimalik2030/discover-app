// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./src/Home";
import AreaPrefernce from "./src/AreaPreference";
import VacationType from "./src/VacationType";
import DestinationCard from "./src/DestinationCard";
import DestinationDetail from "./src/DestinationDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AreaPrefernce"
            component={AreaPrefernce}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="VacationType"
            component={VacationType}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="DestinationCard"
            component={DestinationCard}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
