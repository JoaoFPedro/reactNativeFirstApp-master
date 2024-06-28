import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import { GameContextProvider } from "./src/contexts/gameContext";
import GamesDetails from "./src/pages/GamesDetails/GamesDetails";
import { Game } from "./src/services/games.Services";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  // const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);
  // const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  // const [platforms, setPlatforms] = useState<string[]>([]);

  // const getUniquePlataform = useCallback((games: Game[]) => {
  //   const plataform = games.map((game) => game.plataforma).flat();
  //   console.log(plataform);
  //   return [...new Set(plataform)];
  // }, []);

  // const fetchGames = useCallback(async () => {
  //   try {
  //     const data = await getGames();
  //     setGames(data);
  //     setFilteredGames(data);
  //     setPlatforms(getUniquePlataform(data));
  //   } catch (error) {
  //     setError(error as Error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [getUniquePlataform]);
  // useEffect(() => {
  //   fetchGames();
  // }, [fetchGames]);

  // const applyFilter = (filterText: string) => {
  //   if (filterText === "") {
  //     setGames(games);
  //   } else {
  //     const lowerCasedFilter = filterText.toLocaleLowerCase();
  //     const filtered = games.filter((game) =>
  //       game.nome.toLocaleLowerCase().includes(lowerCasedFilter)
  //     );

  //     setGames(filtered);
  //   }
  // };

  // const handleFilterChange = (filterText: string) => {
  //   const lowerCasedFilter = filterText.toLocaleLowerCase();
  //   const filtered = games.filter(
  //     (game) =>
  //       game.nome.toLocaleLowerCase().includes(lowerCasedFilter) &&
  //       (selectedPlatforms.length === 0 ||
  //         selectedPlatforms.includes(game.plataforma))
  //   );
  //   setFilteredGames(filtered);
  // };

  // const handlePlatformChange = (platform: string) => {
  //   const updatedPlatforms = selectedPlatforms.includes(platform)
  //     ? selectedPlatforms.filter((p) => p !== platform)
  //     : [...selectedPlatforms, platform];

  //   setSelectedPlatforms(updatedPlatforms);
  //   if (!updatedPlatforms.length) {
  //     setFilteredGames(games);
  //     return;
  //   }
  //   const filtered = filteredGames.filter((game) => {
  //     const gameWithPlataform = game.plataforma.find((platformItem) => {
  //       return updatedPlatforms.includes(platformItem);
  //     });

  //     return !!gameWithPlataform;
  //   });

  //   setFilteredGames(filtered);
  // };
  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return <Text>Erro: {error.message}</Text>;
  // }

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //     <Stack.Screen name="Home" component={HomeScreen} />
  //   </Stack.Navigator>
  //   </NavigationContainer>
  // );

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
export type RootStackParamList = {
  Home: undefined;
  GameDetails: { gameId: string };
};
