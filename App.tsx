import { useState } from "react";

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import { GameContextProvider } from "./src/contexts/gameContext";
import GamesDetails from "./src/pages/GamesDetails/GamesDetails";
import { Game } from "./src/services/games.Services";
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  GameDetails: { gameId: number }; // Define gameId como um parâmetro esperado
};
export type GameDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GameDetails'>;
export type GameDetailsScreenRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

export default function App() {

  return (
    <GameContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameDetails"
            component={GamesDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContextProvider>
  );
}

