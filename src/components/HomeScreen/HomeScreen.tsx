import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import React from "react";
import GameList from "../../pages/GameList";
import getGames, { Game } from "../../services/games.Services";
import Footer from "../footer/footer";
import Header from "../header";
import PlatformChecklist from "../PlataformChecklist/PlataformCheckList";
import styles from "./styles";
import { useGameContext } from "../../contexts/gameContext";

export default function HomeScreen() {
  const [games, setGames] = useState<Game[]>([]);
  const [oldfilteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  const getUniquePlataform = useCallback((games: Game[]) => {
    const plataform = games.map((game) => game.plataforma).flat();
    console.log(plataform);
    return [...new Set(plataform)];
  }, []);
  const { filteredGames, handlePlatformChange} = useGameContext();
  const newFilteredGames = filteredGames

  const fetchGames = useCallback(async () => {
    try {
      const data = await getGames();
      setGames(data);
      setFilteredGames(data);
      setPlatforms(getUniquePlataform(data));
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [getUniquePlataform]);
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const applyFilter = (filterText: string) => {
    if (filterText === "") {
      setFilteredGames(games);
    } else {
      const lowerCasedFilter = filterText.toLocaleLowerCase();
      const filtered = games.filter((game) =>
        game.nome.toLocaleLowerCase().includes(lowerCasedFilter)
      );

      setFilteredGames(filtered);
    }
  };

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
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Header applyFilter={applyFilter} />
      <PlatformChecklist
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
        
      />
      <GameList games={newFilteredGames} />

      <Footer />
    </View>
  );
}
